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
<<<<<<< HEAD
        DRAWER.navigation("onlinePurchases", 1);
=======
        DRAWER.navigation("onlinePurchases", 2);
    }
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
>>>>>>> origin/master
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
    $.__views.__alloyId541 = Alloy.createController("_header", {
        id: "__alloyId541",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId541.setParent($.__views.prepaidPack);
    $.__views.__alloyId542 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId542"
    });
    $.__views.prepaidPack.add($.__views.__alloyId542);
    $.__views.__alloyId543 = Ti.UI.createLabel({
=======
    $.__views.__alloyId431 = Alloy.createController("_header", {
        id: "__alloyId431",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId431.setParent($.__views.prepaidPack);
    $.__views.__alloyId432 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId432"
    });
    $.__views.prepaidPack.add($.__views.__alloyId432);
    $.__views.__alloyId433 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId543"
    });
    $.__views.__alloyId542.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createImageView({
=======
        id: "__alloyId433"
    });
    $.__views.__alloyId432.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId544"
    });
    $.__views.__alloyId542.add($.__views.__alloyId544);
    back ? $.__views.__alloyId544.addEventListener("click", back) : __defers["$.__views.__alloyId544!click!back"] = true;
    $.__views.__alloyId545 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId545"
    });
    $.__views.prepaidPack.add($.__views.__alloyId545);
    $.__views.__alloyId546 = Ti.UI.createLabel({
=======
        id: "__alloyId434"
    });
    $.__views.__alloyId432.add($.__views.__alloyId434);
    back ? $.__views.__alloyId434.addEventListener("click", back) : __defers["$.__views.__alloyId434!click!back"] = true;
    $.__views.__alloyId435 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId435"
    });
    $.__views.prepaidPack.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId546"
    });
    $.__views.__alloyId545.add($.__views.__alloyId546);
    $.__views.__alloyId547 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId547"
    });
    $.__views.__alloyId545.add($.__views.__alloyId547);
=======
        id: "__alloyId436"
    });
    $.__views.__alloyId435.add($.__views.__alloyId436);
    $.__views.__alloyId437 = Ti.UI.createLabel({
        text: "ORDERING",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId437"
    });
    $.__views.__alloyId435.add($.__views.__alloyId437);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.__alloyId438 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId438"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId548 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId548"
    });
    $.__views.contentView.add($.__views.__alloyId548);
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
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
    var __alloyId549 = [];
    $.__views.__alloyId550 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId550"
    });
    __alloyId549.push($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId551"
    });
    __alloyId549.push($.__views.__alloyId551);
    $.__views.__alloyId552 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId552"
    });
    __alloyId549.push($.__views.__alloyId552);
    $.__views.picker.add(__alloyId549);
    $.__views.__alloyId553 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId553"
    });
    $.__views.scrollView.add($.__views.__alloyId553);
    $.__views.__alloyId554 = Ti.UI.createLabel({
=======
        id: "__alloyId439"
    });
    $.__views.__alloyId438.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId440"
    });
    $.__views.__alloyId438.add($.__views.__alloyId440);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId440.add($.__views.picker);
    var __alloyId441 = [];
    $.__views.__alloyId442 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId442"
    });
    __alloyId441.push($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId443"
    });
    __alloyId441.push($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId444"
    });
    __alloyId441.push($.__views.__alloyId444);
    $.__views.picker.add(__alloyId441);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId445 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId445"
    });
    $.__views.__alloyId440.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId446"
    });
    $.__views.scrollView.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
<<<<<<< HEAD
        id: "__alloyId554"
    });
    $.__views.__alloyId553.add($.__views.__alloyId554);
    $.__views.__alloyId555 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId555"
    });
    $.__views.__alloyId553.add($.__views.__alloyId555);
=======
        id: "__alloyId447"
    });
    $.__views.__alloyId446.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId448"
    });
    $.__views.__alloyId446.add($.__views.__alloyId448);
>>>>>>> origin/master
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
<<<<<<< HEAD
    $.__views.__alloyId555.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId556 = Ti.UI.createLabel({
=======
    $.__views.__alloyId448.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId449 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId556"
    });
    $.__views.__alloyId555.add($.__views.__alloyId556);
    $.__views.__alloyId557 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId557"
    });
    $.__views.scrollView.add($.__views.__alloyId557);
    $.__views.__alloyId558 = Ti.UI.createLabel({
=======
        id: "__alloyId449"
    });
    $.__views.__alloyId448.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId450"
    });
    $.__views.scrollView.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId558"
    });
    $.__views.__alloyId557.add($.__views.__alloyId558);
    $.__views.__alloyId559 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId559"
    });
    $.__views.__alloyId557.add($.__views.__alloyId559);
    $.__views.__alloyId560 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId560"
    });
    $.__views.__alloyId559.add($.__views.__alloyId560);
=======
        id: "__alloyId451"
    });
    $.__views.__alloyId450.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId452"
    });
    $.__views.__alloyId450.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId453"
    });
    $.__views.__alloyId452.add($.__views.__alloyId453);
>>>>>>> origin/master
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId560.add($.__views.switch2);
    $.__views.__alloyId561 = Ti.UI.createLabel({
=======
    $.__views.__alloyId453.add($.__views.switch2);
    $.__views.__alloyId454 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId561"
    });
    $.__views.__alloyId560.add($.__views.__alloyId561);
    $.__views.__alloyId562 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId562"
    });
    $.__views.__alloyId559.add($.__views.__alloyId562);
=======
        id: "__alloyId454"
    });
    $.__views.__alloyId453.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId455"
    });
    $.__views.__alloyId452.add($.__views.__alloyId455);
>>>>>>> origin/master
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId562.add($.__views.switch3);
    $.__views.__alloyId563 = Ti.UI.createLabel({
=======
    $.__views.__alloyId455.add($.__views.switch3);
    $.__views.__alloyId456 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId563"
    });
    $.__views.__alloyId562.add($.__views.__alloyId563);
    $.__views.__alloyId564 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId564"
    });
    $.__views.__alloyId557.add($.__views.__alloyId564);
    $.__views.__alloyId565 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId565"
    });
    $.__views.__alloyId564.add($.__views.__alloyId565);
=======
        id: "__alloyId456"
    });
    $.__views.__alloyId455.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId457"
    });
    $.__views.__alloyId450.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId458"
    });
    $.__views.__alloyId457.add($.__views.__alloyId458);
>>>>>>> origin/master
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId565.add($.__views.switch4);
    $.__views.__alloyId566 = Ti.UI.createLabel({
=======
    $.__views.__alloyId458.add($.__views.switch4);
    $.__views.__alloyId459 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId566"
    });
    $.__views.__alloyId565.add($.__views.__alloyId566);
    $.__views.__alloyId567 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId567"
    });
    $.__views.__alloyId564.add($.__views.__alloyId567);
=======
        id: "__alloyId459"
    });
    $.__views.__alloyId458.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId460"
    });
    $.__views.__alloyId457.add($.__views.__alloyId460);
>>>>>>> origin/master
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId567.add($.__views.switch5);
    $.__views.__alloyId568 = Ti.UI.createLabel({
=======
    $.__views.__alloyId460.add($.__views.switch5);
    $.__views.__alloyId461 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId568"
    });
    $.__views.__alloyId567.add($.__views.__alloyId568);
    $.__views.__alloyId569 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId569"
    });
    $.__views.scrollView.add($.__views.__alloyId569);
    $.__views.__alloyId570 = Ti.UI.createLabel({
=======
        id: "__alloyId461"
    });
    $.__views.__alloyId460.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId462"
    });
    $.__views.scrollView.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId570"
    });
    $.__views.__alloyId569.add($.__views.__alloyId570);
    $.__views.__alloyId571 = Ti.UI.createTextField({
=======
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId571"
    });
    $.__views.__alloyId569.add($.__views.__alloyId571);
    $.__views.__alloyId572 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId572"
    });
    $.__views.scrollView.add($.__views.__alloyId572);
    $.__views.__alloyId573 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId573"
    });
    $.__views.__alloyId572.add($.__views.__alloyId573);
=======
        id: "__alloyId464"
    });
    $.__views.__alloyId462.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId465"
    });
    $.__views.scrollView.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
>>>>>>> origin/master
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId573.add($.__views.switch6);
    $.__views.__alloyId574 = Ti.UI.createLabel({
=======
    $.__views.__alloyId466.add($.__views.switch6);
    $.__views.__alloyId467 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId574"
    });
    $.__views.__alloyId573.add($.__views.__alloyId574);
=======
        id: "__alloyId467"
    });
    $.__views.__alloyId466.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId468"
    });
    $.__views.__alloyId465.add($.__views.__alloyId468);
>>>>>>> origin/master
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId573.add($.__views.switch7);
    $.__views.__alloyId575 = Ti.UI.createLabel({
=======
    $.__views.__alloyId468.add($.__views.switch7);
    $.__views.__alloyId469 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId575"
    });
    $.__views.__alloyId573.add($.__views.__alloyId575);
    $.__views.__alloyId576 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId576"
    });
    $.__views.scrollView.add($.__views.__alloyId576);
    $.__views.__alloyId577 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId577"
    });
    $.__views.__alloyId576.add($.__views.__alloyId577);
=======
        id: "__alloyId469"
    });
    $.__views.__alloyId468.add($.__views.__alloyId469);
    $.__views.__alloyId470 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId470"
    });
    $.__views.__alloyId465.add($.__views.__alloyId470);
>>>>>>> origin/master
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId577.add($.__views.switch8);
    $.__views.__alloyId578 = Ti.UI.createLabel({
=======
    $.__views.__alloyId470.add($.__views.switch8);
    $.__views.__alloyId471 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId578"
    });
    $.__views.__alloyId577.add($.__views.__alloyId578);
=======
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId472"
    });
    $.__views.__alloyId465.add($.__views.__alloyId472);
>>>>>>> origin/master
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId577.add($.__views.switch9);
    $.__views.__alloyId579 = Ti.UI.createLabel({
=======
    $.__views.__alloyId472.add($.__views.switch9);
    $.__views.__alloyId473 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId579"
    });
    $.__views.__alloyId577.add($.__views.__alloyId579);
    $.__views.__alloyId580 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId580"
    });
    $.__views.scrollView.add($.__views.__alloyId580);
    $.__views.__alloyId581 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId581"
    });
    $.__views.__alloyId580.add($.__views.__alloyId581);
=======
        id: "__alloyId473"
    });
    $.__views.__alloyId472.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId474"
    });
    $.__views.__alloyId465.add($.__views.__alloyId474);
>>>>>>> origin/master
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId581.add($.__views.switch10);
    $.__views.__alloyId582 = Ti.UI.createLabel({
=======
    $.__views.__alloyId474.add($.__views.switch10);
    $.__views.__alloyId475 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId582"
    });
    $.__views.__alloyId581.add($.__views.__alloyId582);
=======
        id: "__alloyId475"
    });
    $.__views.__alloyId474.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId476"
    });
    $.__views.__alloyId465.add($.__views.__alloyId476);
>>>>>>> origin/master
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId581.add($.__views.switch11);
    $.__views.__alloyId583 = Ti.UI.createLabel({
=======
    $.__views.__alloyId476.add($.__views.switch11);
    $.__views.__alloyId477 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId583"
    });
    $.__views.__alloyId581.add($.__views.__alloyId583);
    $.__views.__alloyId584 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId584"
    });
    $.__views.scrollView.add($.__views.__alloyId584);
    $.__views.__alloyId585 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId585"
    });
    $.__views.__alloyId584.add($.__views.__alloyId585);
=======
        id: "__alloyId477"
    });
    $.__views.__alloyId476.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId478"
    });
    $.__views.__alloyId465.add($.__views.__alloyId478);
>>>>>>> origin/master
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId585.add($.__views.switch12);
    $.__views.__alloyId586 = Ti.UI.createLabel({
=======
    $.__views.__alloyId478.add($.__views.switch12);
    $.__views.__alloyId479 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId586"
    });
    $.__views.__alloyId585.add($.__views.__alloyId586);
=======
        id: "__alloyId479"
    });
    $.__views.__alloyId478.add($.__views.__alloyId479);
    $.__views.__alloyId480 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId480"
    });
    $.__views.__alloyId465.add($.__views.__alloyId480);
>>>>>>> origin/master
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId585.add($.__views.switch13);
    $.__views.__alloyId587 = Ti.UI.createLabel({
=======
    $.__views.__alloyId480.add($.__views.switch13);
    $.__views.__alloyId481 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId587"
    });
    $.__views.__alloyId585.add($.__views.__alloyId587);
    $.__views.__alloyId588 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId588"
    });
    $.__views.prepaidPack.add($.__views.__alloyId588);
    next ? $.__views.__alloyId588.addEventListener("click", next) : __defers["$.__views.__alloyId588!click!next"] = true;
    $.__views.__alloyId589 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId589"
    });
    $.__views.__alloyId588.add($.__views.__alloyId589);
=======
        id: "__alloyId481"
    });
    $.__views.__alloyId480.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId482"
    });
    $.__views.prepaidPack.add($.__views.__alloyId482);
    next ? $.__views.__alloyId482.addEventListener("click", next) : __defers["$.__views.__alloyId482!click!next"] = true;
    $.__views.__alloyId483 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId483"
    });
    $.__views.__alloyId482.add($.__views.__alloyId483);
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
    __defers["$.__views.__alloyId544!click!back"] && $.__views.__alloyId544.addEventListener("click", back);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId588!click!next"] && $.__views.__alloyId588.addEventListener("click", next);
=======
    var simType;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId434!click!back"] && $.__views.__alloyId434.addEventListener("click", back);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId482!click!next"] && $.__views.__alloyId482.addEventListener("click", next);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;