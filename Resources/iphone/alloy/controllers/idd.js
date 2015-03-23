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
    $.__views.__alloyId639 = Alloy.createController("_header", {
        id: "__alloyId639",
        __parentSymbol: $.__views.idd
    });
    $.__views.__alloyId639.setParent($.__views.idd);
    $.__views.__alloyId640 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId640"
    });
    $.__views.idd.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createLabel({
=======
    $.__views.__alloyId470 = Alloy.createController("_header", {
        id: "__alloyId470",
        __parentSymbol: $.__views.idd
    });
    $.__views.__alloyId470.setParent($.__views.idd);
    $.__views.__alloyId471 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId471"
    });
    $.__views.idd.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId641"
    });
    $.__views.__alloyId640.add($.__views.__alloyId641);
    $.__views.__alloyId642 = Ti.UI.createImageView({
=======
        id: "__alloyId472"
    });
    $.__views.__alloyId471.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId642"
    });
    $.__views.__alloyId640.add($.__views.__alloyId642);
    back ? $.__views.__alloyId642.addEventListener("click", back) : __defers["$.__views.__alloyId642!click!back"] = true;
=======
        id: "__alloyId473"
    });
    $.__views.__alloyId471.add($.__views.__alloyId473);
    back ? $.__views.__alloyId473.addEventListener("click", back) : __defers["$.__views.__alloyId473!click!back"] = true;
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
    $.__views.__alloyId643 = Ti.UI.createImageView({
=======
    $.__views.__alloyId474 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId643"
    });
    $.__views.pickerContentView.add($.__views.__alloyId643);
    showPicker ? $.__views.__alloyId643.addEventListener("click", showPicker) : __defers["$.__views.__alloyId643!click!showPicker"] = true;
=======
        id: "__alloyId474"
    });
    $.__views.pickerContentView.add($.__views.__alloyId474);
    showPicker ? $.__views.__alloyId474.addEventListener("click", showPicker) : __defers["$.__views.__alloyId474!click!showPicker"] = true;
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
    var __alloyId644 = [];
    $.__views.__alloyId645 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId645"
    });
    __alloyId644.push($.__views.__alloyId645);
    $.__views.__alloyId646 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId646"
    });
    __alloyId644.push($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId647"
    });
    __alloyId644.push($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId648"
    });
    __alloyId644.push($.__views.__alloyId648);
    $.__views.picker.add(__alloyId644);
=======
    var __alloyId475 = [];
    $.__views.__alloyId476 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId476"
    });
    __alloyId475.push($.__views.__alloyId476);
    $.__views.__alloyId477 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId477"
    });
    __alloyId475.push($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId478"
    });
    __alloyId475.push($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId479"
    });
    __alloyId475.push($.__views.__alloyId479);
    $.__views.picker.add(__alloyId475);
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
    $.__views.__alloyId649 = Ti.UI.createView({
=======
    $.__views.__alloyId480 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
<<<<<<< HEAD
        id: "__alloyId649"
    });
    $.__views.view1.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId650"
    });
    $.__views.__alloyId649.add($.__views.__alloyId650);
    $.__views.__alloyId651 = Ti.UI.createLabel({
=======
        id: "__alloyId480"
    });
    $.__views.view1.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId481"
    });
    $.__views.__alloyId480.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId651"
    });
    $.__views.__alloyId650.add($.__views.__alloyId651);
    $.__views.__alloyId652 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId652"
    });
    $.__views.__alloyId649.add($.__views.__alloyId652);
    $.__views.__alloyId653 = Ti.UI.createLabel({
=======
        id: "__alloyId482"
    });
    $.__views.__alloyId481.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId483"
    });
    $.__views.__alloyId480.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId653"
    });
    $.__views.__alloyId652.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createLabel({
=======
        id: "__alloyId484"
    });
    $.__views.__alloyId483.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId654"
    });
    $.__views.__alloyId652.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId655"
    });
    $.__views.__alloyId652.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createLabel({
=======
        id: "__alloyId485"
    });
    $.__views.__alloyId483.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId486"
    });
    $.__views.__alloyId483.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId656"
    });
    $.__views.__alloyId655.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createLabel({
=======
        id: "__alloyId487"
    });
    $.__views.__alloyId486.add($.__views.__alloyId487);
    $.__views.__alloyId488 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId657"
    });
    $.__views.__alloyId655.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId658"
    });
    $.__views.__alloyId649.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createLabel({
=======
        id: "__alloyId488"
    });
    $.__views.__alloyId486.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId489"
    });
    $.__views.__alloyId480.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId659"
    });
    $.__views.__alloyId658.add($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createLabel({
=======
        id: "__alloyId490"
    });
    $.__views.__alloyId489.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId660"
    });
    $.__views.__alloyId658.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId661"
    });
    $.__views.__alloyId658.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createLabel({
=======
        id: "__alloyId491"
    });
    $.__views.__alloyId489.add($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId492"
    });
    $.__views.__alloyId489.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId662"
    });
    $.__views.__alloyId661.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createLabel({
=======
        id: "__alloyId493"
    });
    $.__views.__alloyId492.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId663"
    });
    $.__views.__alloyId661.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId664"
    });
    $.__views.__alloyId649.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createLabel({
=======
        id: "__alloyId494"
    });
    $.__views.__alloyId492.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId495"
    });
    $.__views.__alloyId480.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId665"
    });
    $.__views.__alloyId664.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createLabel({
=======
        id: "__alloyId496"
    });
    $.__views.__alloyId495.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId666"
    });
    $.__views.__alloyId664.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId667"
    });
    $.__views.__alloyId664.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createLabel({
=======
        id: "__alloyId497"
    });
    $.__views.__alloyId495.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId498"
    });
    $.__views.__alloyId495.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId668"
    });
    $.__views.__alloyId667.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createLabel({
=======
        id: "__alloyId499"
    });
    $.__views.__alloyId498.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId669"
    });
    $.__views.__alloyId667.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId670"
    });
    $.__views.__alloyId649.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
=======
        id: "__alloyId500"
    });
    $.__views.__alloyId498.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId501"
    });
    $.__views.__alloyId480.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId671"
    });
    $.__views.__alloyId670.add($.__views.__alloyId671);
    $.__views.__alloyId672 = Ti.UI.createLabel({
=======
        id: "__alloyId502"
    });
    $.__views.__alloyId501.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId672"
    });
    $.__views.__alloyId670.add($.__views.__alloyId672);
    $.__views.__alloyId673 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId673"
    });
    $.__views.__alloyId670.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createLabel({
=======
        id: "__alloyId503"
    });
    $.__views.__alloyId501.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId504"
    });
    $.__views.__alloyId501.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId674"
    });
    $.__views.__alloyId673.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createLabel({
=======
        id: "__alloyId505"
    });
    $.__views.__alloyId504.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId675"
    });
    $.__views.__alloyId673.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId676"
    });
    $.__views.__alloyId649.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createLabel({
=======
        id: "__alloyId506"
    });
    $.__views.__alloyId504.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId507"
    });
    $.__views.__alloyId480.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId677"
    });
    $.__views.__alloyId676.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createLabel({
=======
        id: "__alloyId508"
    });
    $.__views.__alloyId507.add($.__views.__alloyId508);
    $.__views.__alloyId509 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId678"
    });
    $.__views.__alloyId676.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId679"
    });
    $.__views.__alloyId676.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createLabel({
=======
        id: "__alloyId509"
    });
    $.__views.__alloyId507.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId510"
    });
    $.__views.__alloyId507.add($.__views.__alloyId510);
    $.__views.__alloyId511 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId680"
    });
    $.__views.__alloyId679.add($.__views.__alloyId680);
    $.__views.__alloyId681 = Ti.UI.createLabel({
=======
        id: "__alloyId511"
    });
    $.__views.__alloyId510.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId681"
    });
    $.__views.__alloyId679.add($.__views.__alloyId681);
    $.__views.__alloyId682 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId682"
    });
    $.__views.__alloyId649.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createLabel({
=======
        id: "__alloyId512"
    });
    $.__views.__alloyId510.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId513"
    });
    $.__views.__alloyId480.add($.__views.__alloyId513);
    $.__views.__alloyId514 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId683"
    });
    $.__views.__alloyId682.add($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createLabel({
=======
        id: "__alloyId514"
    });
    $.__views.__alloyId513.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId684"
    });
    $.__views.__alloyId682.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId685"
    });
    $.__views.__alloyId682.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createLabel({
=======
        id: "__alloyId515"
    });
    $.__views.__alloyId513.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId516"
    });
    $.__views.__alloyId513.add($.__views.__alloyId516);
    $.__views.__alloyId517 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId686"
    });
    $.__views.__alloyId685.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createLabel({
=======
        id: "__alloyId517"
    });
    $.__views.__alloyId516.add($.__views.__alloyId517);
    $.__views.__alloyId518 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId687"
    });
    $.__views.__alloyId685.add($.__views.__alloyId687);
=======
        id: "__alloyId518"
    });
    $.__views.__alloyId516.add($.__views.__alloyId518);
>>>>>>> origin/master
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
<<<<<<< HEAD
    $.__views.__alloyId688 = Ti.UI.createView({
=======
    $.__views.__alloyId519 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
<<<<<<< HEAD
        id: "__alloyId688"
    });
    $.__views.view2.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId689"
    });
    $.__views.__alloyId688.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createLabel({
=======
        id: "__alloyId519"
    });
    $.__views.view2.add($.__views.__alloyId519);
    $.__views.__alloyId520 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId520"
    });
    $.__views.__alloyId519.add($.__views.__alloyId520);
    $.__views.__alloyId521 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId690"
    });
    $.__views.__alloyId689.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId691"
    });
    $.__views.__alloyId688.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createLabel({
=======
        id: "__alloyId521"
    });
    $.__views.__alloyId520.add($.__views.__alloyId521);
    $.__views.__alloyId522 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId522"
    });
    $.__views.__alloyId519.add($.__views.__alloyId522);
    $.__views.__alloyId523 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId692"
    });
    $.__views.__alloyId691.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createLabel({
=======
        id: "__alloyId523"
    });
    $.__views.__alloyId522.add($.__views.__alloyId523);
    $.__views.__alloyId524 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId693"
    });
    $.__views.__alloyId691.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId694"
    });
    $.__views.__alloyId691.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createLabel({
=======
        id: "__alloyId524"
    });
    $.__views.__alloyId522.add($.__views.__alloyId524);
    $.__views.__alloyId525 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId525"
    });
    $.__views.__alloyId522.add($.__views.__alloyId525);
    $.__views.__alloyId526 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId695"
    });
    $.__views.__alloyId694.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createLabel({
=======
        id: "__alloyId526"
    });
    $.__views.__alloyId525.add($.__views.__alloyId526);
    $.__views.__alloyId527 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId696"
    });
    $.__views.__alloyId694.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId697"
    });
    $.__views.__alloyId688.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createLabel({
=======
        id: "__alloyId527"
    });
    $.__views.__alloyId525.add($.__views.__alloyId527);
    $.__views.__alloyId528 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId528"
    });
    $.__views.__alloyId519.add($.__views.__alloyId528);
    $.__views.__alloyId529 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId698"
    });
    $.__views.__alloyId697.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createLabel({
=======
        id: "__alloyId529"
    });
    $.__views.__alloyId528.add($.__views.__alloyId529);
    $.__views.__alloyId530 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId699"
    });
    $.__views.__alloyId697.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId700"
    });
    $.__views.__alloyId697.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
=======
        id: "__alloyId530"
    });
    $.__views.__alloyId528.add($.__views.__alloyId530);
    $.__views.__alloyId531 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId531"
    });
    $.__views.__alloyId528.add($.__views.__alloyId531);
    $.__views.__alloyId532 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId701"
    });
    $.__views.__alloyId700.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createLabel({
=======
        id: "__alloyId532"
    });
    $.__views.__alloyId531.add($.__views.__alloyId532);
    $.__views.__alloyId533 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId702"
    });
    $.__views.__alloyId700.add($.__views.__alloyId702);
    $.__views.__alloyId703 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId703"
    });
    $.__views.__alloyId688.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createLabel({
=======
        id: "__alloyId533"
    });
    $.__views.__alloyId531.add($.__views.__alloyId533);
    $.__views.__alloyId534 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId534"
    });
    $.__views.__alloyId519.add($.__views.__alloyId534);
    $.__views.__alloyId535 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId704"
    });
    $.__views.__alloyId703.add($.__views.__alloyId704);
    $.__views.__alloyId705 = Ti.UI.createLabel({
=======
        id: "__alloyId535"
    });
    $.__views.__alloyId534.add($.__views.__alloyId535);
    $.__views.__alloyId536 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId705"
    });
    $.__views.__alloyId703.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId706"
    });
    $.__views.__alloyId703.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createLabel({
=======
        id: "__alloyId536"
    });
    $.__views.__alloyId534.add($.__views.__alloyId536);
    $.__views.__alloyId537 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId537"
    });
    $.__views.__alloyId534.add($.__views.__alloyId537);
    $.__views.__alloyId538 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId707"
    });
    $.__views.__alloyId706.add($.__views.__alloyId707);
    $.__views.__alloyId708 = Ti.UI.createLabel({
=======
        id: "__alloyId538"
    });
    $.__views.__alloyId537.add($.__views.__alloyId538);
    $.__views.__alloyId539 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId708"
    });
    $.__views.__alloyId706.add($.__views.__alloyId708);
    $.__views.__alloyId709 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId709"
    });
    $.__views.__alloyId688.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createLabel({
=======
        id: "__alloyId539"
    });
    $.__views.__alloyId537.add($.__views.__alloyId539);
    $.__views.__alloyId540 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId540"
    });
    $.__views.__alloyId519.add($.__views.__alloyId540);
    $.__views.__alloyId541 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId710"
    });
    $.__views.__alloyId709.add($.__views.__alloyId710);
    $.__views.__alloyId711 = Ti.UI.createLabel({
=======
        id: "__alloyId541"
    });
    $.__views.__alloyId540.add($.__views.__alloyId541);
    $.__views.__alloyId542 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId711"
    });
    $.__views.__alloyId709.add($.__views.__alloyId711);
    $.__views.__alloyId712 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId712"
    });
    $.__views.__alloyId709.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createLabel({
=======
        id: "__alloyId542"
    });
    $.__views.__alloyId540.add($.__views.__alloyId542);
    $.__views.__alloyId543 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId543"
    });
    $.__views.__alloyId540.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId713"
    });
    $.__views.__alloyId712.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createLabel({
=======
        id: "__alloyId544"
    });
    $.__views.__alloyId543.add($.__views.__alloyId544);
    $.__views.__alloyId545 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId714"
    });
    $.__views.__alloyId712.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId715"
    });
    $.__views.__alloyId688.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createLabel({
=======
        id: "__alloyId545"
    });
    $.__views.__alloyId543.add($.__views.__alloyId545);
    $.__views.__alloyId546 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId546"
    });
    $.__views.__alloyId519.add($.__views.__alloyId546);
    $.__views.__alloyId547 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId716"
    });
    $.__views.__alloyId715.add($.__views.__alloyId716);
    $.__views.__alloyId717 = Ti.UI.createLabel({
=======
        id: "__alloyId547"
    });
    $.__views.__alloyId546.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId717"
    });
    $.__views.__alloyId715.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId718"
    });
    $.__views.__alloyId715.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createLabel({
=======
        id: "__alloyId548"
    });
    $.__views.__alloyId546.add($.__views.__alloyId548);
    $.__views.__alloyId549 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId549"
    });
    $.__views.__alloyId546.add($.__views.__alloyId549);
    $.__views.__alloyId550 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId719"
    });
    $.__views.__alloyId718.add($.__views.__alloyId719);
    $.__views.__alloyId720 = Ti.UI.createLabel({
=======
        id: "__alloyId550"
    });
    $.__views.__alloyId549.add($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId720"
    });
    $.__views.__alloyId718.add($.__views.__alloyId720);
    $.__views.__alloyId721 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId721"
    });
    $.__views.__alloyId688.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createLabel({
=======
        id: "__alloyId551"
    });
    $.__views.__alloyId549.add($.__views.__alloyId551);
    $.__views.__alloyId552 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId552"
    });
    $.__views.__alloyId519.add($.__views.__alloyId552);
    $.__views.__alloyId553 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId722"
    });
    $.__views.__alloyId721.add($.__views.__alloyId722);
    $.__views.__alloyId723 = Ti.UI.createLabel({
=======
        id: "__alloyId553"
    });
    $.__views.__alloyId552.add($.__views.__alloyId553);
    $.__views.__alloyId554 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId723"
    });
    $.__views.__alloyId721.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId724"
    });
    $.__views.__alloyId721.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createLabel({
=======
        id: "__alloyId554"
    });
    $.__views.__alloyId552.add($.__views.__alloyId554);
    $.__views.__alloyId555 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId555"
    });
    $.__views.__alloyId552.add($.__views.__alloyId555);
    $.__views.__alloyId556 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId725"
    });
    $.__views.__alloyId724.add($.__views.__alloyId725);
    $.__views.__alloyId726 = Ti.UI.createLabel({
=======
        id: "__alloyId556"
    });
    $.__views.__alloyId555.add($.__views.__alloyId556);
    $.__views.__alloyId557 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId726"
    });
    $.__views.__alloyId724.add($.__views.__alloyId726);
=======
        id: "__alloyId557"
    });
    $.__views.__alloyId555.add($.__views.__alloyId557);
>>>>>>> origin/master
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
<<<<<<< HEAD
    $.__views.__alloyId727 = Ti.UI.createView({
=======
    $.__views.__alloyId558 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
<<<<<<< HEAD
        id: "__alloyId727"
    });
    $.__views.view3.add($.__views.__alloyId727);
    $.__views.__alloyId728 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId728"
    });
    $.__views.__alloyId727.add($.__views.__alloyId728);
    $.__views.__alloyId729 = Ti.UI.createLabel({
=======
        id: "__alloyId558"
    });
    $.__views.view3.add($.__views.__alloyId558);
    $.__views.__alloyId559 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId559"
    });
    $.__views.__alloyId558.add($.__views.__alloyId559);
    $.__views.__alloyId560 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId729"
    });
    $.__views.__alloyId728.add($.__views.__alloyId729);
    $.__views.__alloyId730 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId730"
    });
    $.__views.__alloyId727.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createLabel({
=======
        id: "__alloyId560"
    });
    $.__views.__alloyId559.add($.__views.__alloyId560);
    $.__views.__alloyId561 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId561"
    });
    $.__views.__alloyId558.add($.__views.__alloyId561);
    $.__views.__alloyId562 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId731"
    });
    $.__views.__alloyId730.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createLabel({
=======
        id: "__alloyId562"
    });
    $.__views.__alloyId561.add($.__views.__alloyId562);
    $.__views.__alloyId563 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId732"
    });
    $.__views.__alloyId730.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId733"
    });
    $.__views.__alloyId730.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createLabel({
=======
        id: "__alloyId563"
    });
    $.__views.__alloyId561.add($.__views.__alloyId563);
    $.__views.__alloyId564 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId564"
    });
    $.__views.__alloyId561.add($.__views.__alloyId564);
    $.__views.__alloyId565 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId734"
    });
    $.__views.__alloyId733.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createLabel({
=======
        id: "__alloyId565"
    });
    $.__views.__alloyId564.add($.__views.__alloyId565);
    $.__views.__alloyId566 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId735"
    });
    $.__views.__alloyId733.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId736"
    });
    $.__views.__alloyId727.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createLabel({
=======
        id: "__alloyId566"
    });
    $.__views.__alloyId564.add($.__views.__alloyId566);
    $.__views.__alloyId567 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId567"
    });
    $.__views.__alloyId558.add($.__views.__alloyId567);
    $.__views.__alloyId568 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId737"
    });
    $.__views.__alloyId736.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createLabel({
=======
        id: "__alloyId568"
    });
    $.__views.__alloyId567.add($.__views.__alloyId568);
    $.__views.__alloyId569 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId738"
    });
    $.__views.__alloyId736.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId739"
    });
    $.__views.__alloyId736.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createLabel({
=======
        id: "__alloyId569"
    });
    $.__views.__alloyId567.add($.__views.__alloyId569);
    $.__views.__alloyId570 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId570"
    });
    $.__views.__alloyId567.add($.__views.__alloyId570);
    $.__views.__alloyId571 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId740"
    });
    $.__views.__alloyId739.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createLabel({
=======
        id: "__alloyId571"
    });
    $.__views.__alloyId570.add($.__views.__alloyId571);
    $.__views.__alloyId572 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId741"
    });
    $.__views.__alloyId739.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId742"
    });
    $.__views.__alloyId727.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createLabel({
=======
        id: "__alloyId572"
    });
    $.__views.__alloyId570.add($.__views.__alloyId572);
    $.__views.__alloyId573 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId573"
    });
    $.__views.__alloyId558.add($.__views.__alloyId573);
    $.__views.__alloyId574 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId743"
    });
    $.__views.__alloyId742.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createLabel({
=======
        id: "__alloyId574"
    });
    $.__views.__alloyId573.add($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId744"
    });
    $.__views.__alloyId742.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId745"
    });
    $.__views.__alloyId742.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createLabel({
=======
        id: "__alloyId575"
    });
    $.__views.__alloyId573.add($.__views.__alloyId575);
    $.__views.__alloyId576 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId576"
    });
    $.__views.__alloyId573.add($.__views.__alloyId576);
    $.__views.__alloyId577 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId746"
    });
    $.__views.__alloyId745.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createLabel({
=======
        id: "__alloyId577"
    });
    $.__views.__alloyId576.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId747"
    });
    $.__views.__alloyId745.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId748"
    });
    $.__views.__alloyId727.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createLabel({
=======
        id: "__alloyId578"
    });
    $.__views.__alloyId576.add($.__views.__alloyId578);
    $.__views.__alloyId579 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId579"
    });
    $.__views.__alloyId558.add($.__views.__alloyId579);
    $.__views.__alloyId580 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId749"
    });
    $.__views.__alloyId748.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createLabel({
=======
        id: "__alloyId580"
    });
    $.__views.__alloyId579.add($.__views.__alloyId580);
    $.__views.__alloyId581 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId750"
    });
    $.__views.__alloyId748.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId751"
    });
    $.__views.__alloyId748.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
=======
        id: "__alloyId581"
    });
    $.__views.__alloyId579.add($.__views.__alloyId581);
    $.__views.__alloyId582 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId582"
    });
    $.__views.__alloyId579.add($.__views.__alloyId582);
    $.__views.__alloyId583 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId752"
    });
    $.__views.__alloyId751.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createLabel({
=======
        id: "__alloyId583"
    });
    $.__views.__alloyId582.add($.__views.__alloyId583);
    $.__views.__alloyId584 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId753"
    });
    $.__views.__alloyId751.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId754"
    });
    $.__views.__alloyId727.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createLabel({
=======
        id: "__alloyId584"
    });
    $.__views.__alloyId582.add($.__views.__alloyId584);
    $.__views.__alloyId585 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId585"
    });
    $.__views.__alloyId558.add($.__views.__alloyId585);
    $.__views.__alloyId586 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId755"
    });
    $.__views.__alloyId754.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createLabel({
=======
        id: "__alloyId586"
    });
    $.__views.__alloyId585.add($.__views.__alloyId586);
    $.__views.__alloyId587 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId756"
    });
    $.__views.__alloyId754.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId757"
    });
    $.__views.__alloyId754.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createLabel({
=======
        id: "__alloyId587"
    });
    $.__views.__alloyId585.add($.__views.__alloyId587);
    $.__views.__alloyId588 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId588"
    });
    $.__views.__alloyId585.add($.__views.__alloyId588);
    $.__views.__alloyId589 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId758"
    });
    $.__views.__alloyId757.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createLabel({
=======
        id: "__alloyId589"
    });
    $.__views.__alloyId588.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId759"
    });
    $.__views.__alloyId757.add($.__views.__alloyId759);
    $.__views.__alloyId760 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId760"
    });
    $.__views.__alloyId727.add($.__views.__alloyId760);
    $.__views.__alloyId761 = Ti.UI.createLabel({
=======
        id: "__alloyId590"
    });
    $.__views.__alloyId588.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId591"
    });
    $.__views.__alloyId558.add($.__views.__alloyId591);
    $.__views.__alloyId592 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId761"
    });
    $.__views.__alloyId760.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createLabel({
=======
        id: "__alloyId592"
    });
    $.__views.__alloyId591.add($.__views.__alloyId592);
    $.__views.__alloyId593 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId762"
    });
    $.__views.__alloyId760.add($.__views.__alloyId762);
    $.__views.__alloyId763 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId763"
    });
    $.__views.__alloyId760.add($.__views.__alloyId763);
    $.__views.__alloyId764 = Ti.UI.createLabel({
=======
        id: "__alloyId593"
    });
    $.__views.__alloyId591.add($.__views.__alloyId593);
    $.__views.__alloyId594 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId594"
    });
    $.__views.__alloyId591.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId764"
    });
    $.__views.__alloyId763.add($.__views.__alloyId764);
    $.__views.__alloyId765 = Ti.UI.createLabel({
=======
        id: "__alloyId595"
    });
    $.__views.__alloyId594.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId765"
    });
    $.__views.__alloyId763.add($.__views.__alloyId765);
=======
        id: "__alloyId596"
    });
    $.__views.__alloyId594.add($.__views.__alloyId596);
>>>>>>> origin/master
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
<<<<<<< HEAD
    $.__views.__alloyId766 = Ti.UI.createView({
=======
    $.__views.__alloyId597 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
<<<<<<< HEAD
        id: "__alloyId766"
    });
    $.__views.view4.add($.__views.__alloyId766);
    $.__views.__alloyId767 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId767"
    });
    $.__views.__alloyId766.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createLabel({
=======
        id: "__alloyId597"
    });
    $.__views.view4.add($.__views.__alloyId597);
    $.__views.__alloyId598 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId598"
    });
    $.__views.__alloyId597.add($.__views.__alloyId598);
    $.__views.__alloyId599 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId768"
    });
    $.__views.__alloyId767.add($.__views.__alloyId768);
    $.__views.__alloyId769 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId769"
    });
    $.__views.__alloyId766.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createLabel({
=======
        id: "__alloyId599"
    });
    $.__views.__alloyId598.add($.__views.__alloyId599);
    $.__views.__alloyId600 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId600"
    });
    $.__views.__alloyId597.add($.__views.__alloyId600);
    $.__views.__alloyId601 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId770"
    });
    $.__views.__alloyId769.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createLabel({
=======
        id: "__alloyId601"
    });
    $.__views.__alloyId600.add($.__views.__alloyId601);
    $.__views.__alloyId602 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId771"
    });
    $.__views.__alloyId769.add($.__views.__alloyId771);
    $.__views.__alloyId772 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId772"
    });
    $.__views.__alloyId769.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createLabel({
=======
        id: "__alloyId602"
    });
    $.__views.__alloyId600.add($.__views.__alloyId602);
    $.__views.__alloyId603 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId603"
    });
    $.__views.__alloyId600.add($.__views.__alloyId603);
    $.__views.__alloyId604 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId773"
    });
    $.__views.__alloyId772.add($.__views.__alloyId773);
    $.__views.__alloyId774 = Ti.UI.createLabel({
=======
        id: "__alloyId604"
    });
    $.__views.__alloyId603.add($.__views.__alloyId604);
    $.__views.__alloyId605 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId774"
    });
    $.__views.__alloyId772.add($.__views.__alloyId774);
    $.__views.__alloyId775 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId775"
    });
    $.__views.__alloyId766.add($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createLabel({
=======
        id: "__alloyId605"
    });
    $.__views.__alloyId603.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId606"
    });
    $.__views.__alloyId597.add($.__views.__alloyId606);
    $.__views.__alloyId607 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId776"
    });
    $.__views.__alloyId775.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createLabel({
=======
        id: "__alloyId607"
    });
    $.__views.__alloyId606.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId777"
    });
    $.__views.__alloyId775.add($.__views.__alloyId777);
    $.__views.__alloyId778 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId778"
    });
    $.__views.__alloyId775.add($.__views.__alloyId778);
    $.__views.__alloyId779 = Ti.UI.createLabel({
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
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId779"
    });
    $.__views.__alloyId778.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createLabel({
=======
        id: "__alloyId610"
    });
    $.__views.__alloyId609.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId780"
    });
    $.__views.__alloyId778.add($.__views.__alloyId780);
    $.__views.__alloyId781 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId781"
    });
    $.__views.__alloyId766.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createLabel({
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
    $.__views.__alloyId597.add($.__views.__alloyId612);
    $.__views.__alloyId613 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId782"
    });
    $.__views.__alloyId781.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createLabel({
=======
        id: "__alloyId613"
    });
    $.__views.__alloyId612.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId783"
    });
    $.__views.__alloyId781.add($.__views.__alloyId783);
    $.__views.__alloyId784 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId784"
    });
    $.__views.__alloyId781.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createLabel({
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
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId785"
    });
    $.__views.__alloyId784.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createLabel({
=======
        id: "__alloyId616"
    });
    $.__views.__alloyId615.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId786"
    });
    $.__views.__alloyId784.add($.__views.__alloyId786);
    $.__views.__alloyId787 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId787"
    });
    $.__views.__alloyId766.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createLabel({
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
    $.__views.__alloyId597.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId788"
    });
    $.__views.__alloyId787.add($.__views.__alloyId788);
    $.__views.__alloyId789 = Ti.UI.createLabel({
=======
        id: "__alloyId619"
    });
    $.__views.__alloyId618.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId789"
    });
    $.__views.__alloyId787.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId790"
    });
    $.__views.__alloyId787.add($.__views.__alloyId790);
    $.__views.__alloyId791 = Ti.UI.createLabel({
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
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId791"
    });
    $.__views.__alloyId790.add($.__views.__alloyId791);
    $.__views.__alloyId792 = Ti.UI.createLabel({
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
        id: "__alloyId792"
    });
    $.__views.__alloyId790.add($.__views.__alloyId792);
    $.__views.__alloyId793 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId793"
    });
    $.__views.__alloyId766.add($.__views.__alloyId793);
    $.__views.__alloyId794 = Ti.UI.createLabel({
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
    $.__views.__alloyId597.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId794"
    });
    $.__views.__alloyId793.add($.__views.__alloyId794);
    $.__views.__alloyId795 = Ti.UI.createLabel({
=======
        id: "__alloyId625"
    });
    $.__views.__alloyId624.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId795"
    });
    $.__views.__alloyId793.add($.__views.__alloyId795);
    $.__views.__alloyId796 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId796"
    });
    $.__views.__alloyId793.add($.__views.__alloyId796);
    $.__views.__alloyId797 = Ti.UI.createLabel({
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
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId797"
    });
    $.__views.__alloyId796.add($.__views.__alloyId797);
    $.__views.__alloyId798 = Ti.UI.createLabel({
=======
        id: "__alloyId628"
    });
    $.__views.__alloyId627.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId798"
    });
    $.__views.__alloyId796.add($.__views.__alloyId798);
    $.__views.__alloyId799 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId799"
    });
    $.__views.__alloyId766.add($.__views.__alloyId799);
    $.__views.__alloyId800 = Ti.UI.createLabel({
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
    $.__views.__alloyId597.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId800"
    });
    $.__views.__alloyId799.add($.__views.__alloyId800);
    $.__views.__alloyId801 = Ti.UI.createLabel({
=======
        id: "__alloyId631"
    });
    $.__views.__alloyId630.add($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId801"
    });
    $.__views.__alloyId799.add($.__views.__alloyId801);
    $.__views.__alloyId802 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId802"
    });
    $.__views.__alloyId799.add($.__views.__alloyId802);
    $.__views.__alloyId803 = Ti.UI.createLabel({
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
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId803"
    });
    $.__views.__alloyId802.add($.__views.__alloyId803);
    $.__views.__alloyId804 = Ti.UI.createLabel({
=======
        id: "__alloyId634"
    });
    $.__views.__alloyId633.add($.__views.__alloyId634);
    $.__views.__alloyId635 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId804"
    });
    $.__views.__alloyId802.add($.__views.__alloyId804);
    $.__views.__alloyId805 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId805"
    });
    $.__views.idd.add($.__views.__alloyId805);
    subscribe ? $.__views.__alloyId805.addEventListener("click", subscribe) : __defers["$.__views.__alloyId805!click!subscribe"] = true;
    $.__views.__alloyId806 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId806"
    });
    $.__views.__alloyId805.add($.__views.__alloyId806);
=======
        id: "__alloyId635"
    });
    $.__views.__alloyId633.add($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId636"
    });
    $.__views.idd.add($.__views.__alloyId636);
    subscribe ? $.__views.__alloyId636.addEventListener("click", subscribe) : __defers["$.__views.__alloyId636!click!subscribe"] = true;
    $.__views.__alloyId637 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId637"
    });
    $.__views.__alloyId636.add($.__views.__alloyId637);
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
    __defers["$.__views.__alloyId642!click!back"] && $.__views.__alloyId642.addEventListener("click", back);
    __defers["$.__views.iddLabel!click!showPicker"] && $.__views.iddLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId643!click!showPicker"] && $.__views.__alloyId643.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!idd"] && $.__views.picker.addEventListener("change", idd);
    __defers["$.__views.__alloyId805!click!subscribe"] && $.__views.__alloyId805.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId473!click!back"] && $.__views.__alloyId473.addEventListener("click", back);
    __defers["$.__views.iddLabel!click!showPicker"] && $.__views.iddLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId474!click!showPicker"] && $.__views.__alloyId474.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!idd"] && $.__views.picker.addEventListener("change", idd);
    __defers["$.__views.__alloyId636!click!subscribe"] && $.__views.__alloyId636.addEventListener("click", subscribe);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;