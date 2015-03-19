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
    $.__views.__alloyId429 = Alloy.createController("_header", {
        id: "__alloyId429",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId429.setParent($.__views.prepaidPack);
    $.__views.__alloyId430 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId430"
    });
    $.__views.prepaidPack.add($.__views.__alloyId430);
    $.__views.__alloyId431 = Ti.UI.createLabel({
=======
    $.__views.__alloyId832 = Alloy.createController("_header", {
        id: "__alloyId832",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId832.setParent($.__views.prepaidPack);
    $.__views.__alloyId833 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId833"
    });
    $.__views.prepaidPack.add($.__views.__alloyId833);
    $.__views.__alloyId834 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId431"
    });
    $.__views.__alloyId430.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createImageView({
=======
        id: "__alloyId834"
    });
    $.__views.__alloyId833.add($.__views.__alloyId834);
    $.__views.__alloyId835 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId432"
    });
    $.__views.__alloyId430.add($.__views.__alloyId432);
    back ? $.__views.__alloyId432.addEventListener("click", back) : __defers["$.__views.__alloyId432!click!back"] = true;
    $.__views.__alloyId433 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId433"
    });
    $.__views.prepaidPack.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createLabel({
=======
        id: "__alloyId835"
    });
    $.__views.__alloyId833.add($.__views.__alloyId835);
    back ? $.__views.__alloyId835.addEventListener("click", back) : __defers["$.__views.__alloyId835!click!back"] = true;
    $.__views.__alloyId836 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId836"
    });
    $.__views.prepaidPack.add($.__views.__alloyId836);
    $.__views.__alloyId837 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId434"
    });
    $.__views.__alloyId433.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
=======
        id: "__alloyId837"
    });
    $.__views.__alloyId836.add($.__views.__alloyId837);
    $.__views.__alloyId838 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "ORDERING",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId435"
    });
    $.__views.__alloyId433.add($.__views.__alloyId435);
=======
        id: "__alloyId838"
    });
    $.__views.__alloyId836.add($.__views.__alloyId838);
>>>>>>> origin/master
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
    $.__views.__alloyId436 = Ti.UI.createLabel({
=======
    $.__views.__alloyId839 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId436"
    });
    $.__views.contentView.add($.__views.__alloyId436);
=======
        id: "__alloyId839"
    });
    $.__views.contentView.add($.__views.__alloyId839);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId437 = Ti.UI.createImageView({
=======
    $.__views.__alloyId840 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId437"
    });
    $.__views.pickerContentView.add($.__views.__alloyId437);
    showPicker ? $.__views.__alloyId437.addEventListener("click", showPicker) : __defers["$.__views.__alloyId437!click!showPicker"] = true;
=======
        id: "__alloyId840"
    });
    $.__views.pickerContentView.add($.__views.__alloyId840);
    showPicker ? $.__views.__alloyId840.addEventListener("click", showPicker) : __defers["$.__views.__alloyId840!click!showPicker"] = true;
>>>>>>> origin/master
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
<<<<<<< HEAD
    var __alloyId438 = [];
    $.__views.__alloyId439 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId439"
    });
    __alloyId438.push($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId440"
    });
    __alloyId438.push($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId441"
    });
    __alloyId438.push($.__views.__alloyId441);
    $.__views.picker.add(__alloyId438);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId442 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId442"
    });
    $.__views.scrollView.add($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createLabel({
=======
    var __alloyId841 = [];
    $.__views.__alloyId842 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId842"
    });
    __alloyId841.push($.__views.__alloyId842);
    $.__views.__alloyId843 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId843"
    });
    __alloyId841.push($.__views.__alloyId843);
    $.__views.__alloyId844 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId844"
    });
    __alloyId841.push($.__views.__alloyId844);
    $.__views.picker.add(__alloyId841);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId845 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId845"
    });
    $.__views.scrollView.add($.__views.__alloyId845);
    $.__views.__alloyId846 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
<<<<<<< HEAD
        id: "__alloyId443"
    });
    $.__views.__alloyId442.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId444"
    });
    $.__views.__alloyId442.add($.__views.__alloyId444);
=======
        id: "__alloyId846"
    });
    $.__views.__alloyId845.add($.__views.__alloyId846);
    $.__views.__alloyId847 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId847"
    });
    $.__views.__alloyId845.add($.__views.__alloyId847);
>>>>>>> origin/master
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
<<<<<<< HEAD
    $.__views.__alloyId444.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId445 = Ti.UI.createLabel({
=======
    $.__views.__alloyId847.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId848 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId445"
    });
    $.__views.__alloyId444.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId446"
    });
    $.__views.scrollView.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createLabel({
=======
        id: "__alloyId848"
    });
    $.__views.__alloyId847.add($.__views.__alloyId848);
    $.__views.__alloyId849 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId849"
    });
    $.__views.scrollView.add($.__views.__alloyId849);
    $.__views.__alloyId850 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId447"
    });
    $.__views.__alloyId446.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId448"
    });
    $.__views.__alloyId446.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId449"
    });
    $.__views.__alloyId448.add($.__views.__alloyId449);
=======
        id: "__alloyId850"
    });
    $.__views.__alloyId849.add($.__views.__alloyId850);
    $.__views.__alloyId851 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId851"
    });
    $.__views.__alloyId849.add($.__views.__alloyId851);
    $.__views.__alloyId852 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId852"
    });
    $.__views.__alloyId851.add($.__views.__alloyId852);
>>>>>>> origin/master
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId449.add($.__views.switch2);
    $.__views.__alloyId450 = Ti.UI.createLabel({
=======
    $.__views.__alloyId852.add($.__views.switch2);
    $.__views.__alloyId853 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId450"
    });
    $.__views.__alloyId449.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId451"
    });
    $.__views.__alloyId448.add($.__views.__alloyId451);
=======
        id: "__alloyId853"
    });
    $.__views.__alloyId852.add($.__views.__alloyId853);
    $.__views.__alloyId854 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId854"
    });
    $.__views.__alloyId851.add($.__views.__alloyId854);
>>>>>>> origin/master
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId451.add($.__views.switch3);
    $.__views.__alloyId452 = Ti.UI.createLabel({
=======
    $.__views.__alloyId854.add($.__views.switch3);
    $.__views.__alloyId855 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId452"
    });
    $.__views.__alloyId451.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId453"
    });
    $.__views.__alloyId446.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId454"
    });
    $.__views.__alloyId453.add($.__views.__alloyId454);
=======
        id: "__alloyId855"
    });
    $.__views.__alloyId854.add($.__views.__alloyId855);
    $.__views.__alloyId856 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId856"
    });
    $.__views.__alloyId849.add($.__views.__alloyId856);
    $.__views.__alloyId857 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId857"
    });
    $.__views.__alloyId856.add($.__views.__alloyId857);
>>>>>>> origin/master
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId454.add($.__views.switch4);
    $.__views.__alloyId455 = Ti.UI.createLabel({
=======
    $.__views.__alloyId857.add($.__views.switch4);
    $.__views.__alloyId858 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId455"
    });
    $.__views.__alloyId454.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId456"
    });
    $.__views.__alloyId453.add($.__views.__alloyId456);
=======
        id: "__alloyId858"
    });
    $.__views.__alloyId857.add($.__views.__alloyId858);
    $.__views.__alloyId859 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId859"
    });
    $.__views.__alloyId856.add($.__views.__alloyId859);
>>>>>>> origin/master
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId456.add($.__views.switch5);
    $.__views.__alloyId457 = Ti.UI.createLabel({
=======
    $.__views.__alloyId859.add($.__views.switch5);
    $.__views.__alloyId860 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId457"
    });
    $.__views.__alloyId456.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId458"
    });
    $.__views.scrollView.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createLabel({
=======
        id: "__alloyId860"
    });
    $.__views.__alloyId859.add($.__views.__alloyId860);
    $.__views.__alloyId861 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId861"
    });
    $.__views.scrollView.add($.__views.__alloyId861);
    $.__views.__alloyId862 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId459"
    });
    $.__views.__alloyId458.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createTextField({
=======
        id: "__alloyId862"
    });
    $.__views.__alloyId861.add($.__views.__alloyId862);
    $.__views.__alloyId863 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId460"
    });
    $.__views.__alloyId458.add($.__views.__alloyId460);
    $.__views.__alloyId461 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId461"
    });
    $.__views.scrollView.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId462"
    });
    $.__views.__alloyId461.add($.__views.__alloyId462);
=======
        id: "__alloyId863"
    });
    $.__views.__alloyId861.add($.__views.__alloyId863);
    $.__views.__alloyId864 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId864"
    });
    $.__views.scrollView.add($.__views.__alloyId864);
    $.__views.__alloyId865 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId865"
    });
    $.__views.__alloyId864.add($.__views.__alloyId865);
>>>>>>> origin/master
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId462.add($.__views.switch6);
    $.__views.__alloyId463 = Ti.UI.createLabel({
=======
    $.__views.__alloyId865.add($.__views.switch6);
    $.__views.__alloyId866 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId464"
    });
    $.__views.__alloyId461.add($.__views.__alloyId464);
=======
        id: "__alloyId866"
    });
    $.__views.__alloyId865.add($.__views.__alloyId866);
    $.__views.__alloyId867 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId867"
    });
    $.__views.__alloyId864.add($.__views.__alloyId867);
>>>>>>> origin/master
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId464.add($.__views.switch7);
    $.__views.__alloyId465 = Ti.UI.createLabel({
=======
    $.__views.__alloyId867.add($.__views.switch7);
    $.__views.__alloyId868 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId465"
    });
    $.__views.__alloyId464.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId466"
    });
    $.__views.__alloyId461.add($.__views.__alloyId466);
=======
        id: "__alloyId868"
    });
    $.__views.__alloyId867.add($.__views.__alloyId868);
    $.__views.__alloyId869 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId869"
    });
    $.__views.__alloyId864.add($.__views.__alloyId869);
>>>>>>> origin/master
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId466.add($.__views.switch8);
    $.__views.__alloyId467 = Ti.UI.createLabel({
=======
    $.__views.__alloyId869.add($.__views.switch8);
    $.__views.__alloyId870 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId467"
    });
    $.__views.__alloyId466.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId468"
    });
    $.__views.__alloyId461.add($.__views.__alloyId468);
=======
        id: "__alloyId870"
    });
    $.__views.__alloyId869.add($.__views.__alloyId870);
    $.__views.__alloyId871 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId871"
    });
    $.__views.__alloyId864.add($.__views.__alloyId871);
>>>>>>> origin/master
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId468.add($.__views.switch9);
    $.__views.__alloyId469 = Ti.UI.createLabel({
=======
    $.__views.__alloyId871.add($.__views.switch9);
    $.__views.__alloyId872 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId469"
    });
    $.__views.__alloyId468.add($.__views.__alloyId469);
    $.__views.__alloyId470 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId470"
    });
    $.__views.__alloyId461.add($.__views.__alloyId470);
=======
        id: "__alloyId872"
    });
    $.__views.__alloyId871.add($.__views.__alloyId872);
    $.__views.__alloyId873 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId873"
    });
    $.__views.__alloyId864.add($.__views.__alloyId873);
>>>>>>> origin/master
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId470.add($.__views.switch10);
    $.__views.__alloyId471 = Ti.UI.createLabel({
=======
    $.__views.__alloyId873.add($.__views.switch10);
    $.__views.__alloyId874 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId472"
    });
    $.__views.__alloyId461.add($.__views.__alloyId472);
=======
        id: "__alloyId874"
    });
    $.__views.__alloyId873.add($.__views.__alloyId874);
    $.__views.__alloyId875 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId875"
    });
    $.__views.__alloyId864.add($.__views.__alloyId875);
>>>>>>> origin/master
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId472.add($.__views.switch11);
    $.__views.__alloyId473 = Ti.UI.createLabel({
=======
    $.__views.__alloyId875.add($.__views.switch11);
    $.__views.__alloyId876 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId473"
    });
    $.__views.__alloyId472.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId474"
    });
    $.__views.__alloyId461.add($.__views.__alloyId474);
=======
        id: "__alloyId876"
    });
    $.__views.__alloyId875.add($.__views.__alloyId876);
    $.__views.__alloyId877 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId877"
    });
    $.__views.__alloyId864.add($.__views.__alloyId877);
>>>>>>> origin/master
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId474.add($.__views.switch12);
    $.__views.__alloyId475 = Ti.UI.createLabel({
=======
    $.__views.__alloyId877.add($.__views.switch12);
    $.__views.__alloyId878 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId475"
    });
    $.__views.__alloyId474.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId476"
    });
    $.__views.__alloyId461.add($.__views.__alloyId476);
=======
        id: "__alloyId878"
    });
    $.__views.__alloyId877.add($.__views.__alloyId878);
    $.__views.__alloyId879 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId879"
    });
    $.__views.__alloyId864.add($.__views.__alloyId879);
>>>>>>> origin/master
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId476.add($.__views.switch13);
    $.__views.__alloyId477 = Ti.UI.createLabel({
=======
    $.__views.__alloyId879.add($.__views.switch13);
    $.__views.__alloyId880 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId477"
    });
    $.__views.__alloyId476.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId478"
    });
    $.__views.prepaidPack.add($.__views.__alloyId478);
    next ? $.__views.__alloyId478.addEventListener("click", next) : __defers["$.__views.__alloyId478!click!next"] = true;
    $.__views.__alloyId479 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId479"
    });
    $.__views.__alloyId478.add($.__views.__alloyId479);
=======
        id: "__alloyId880"
    });
    $.__views.__alloyId879.add($.__views.__alloyId880);
    $.__views.__alloyId881 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId881"
    });
    $.__views.prepaidPack.add($.__views.__alloyId881);
    next ? $.__views.__alloyId881.addEventListener("click", next) : __defers["$.__views.__alloyId881!click!next"] = true;
    $.__views.__alloyId882 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId882"
    });
    $.__views.__alloyId881.add($.__views.__alloyId882);
>>>>>>> origin/master
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
    var simType;
    $.picker.setSelectedRow(0, 0, false);
<<<<<<< HEAD
    __defers["$.__views.__alloyId432!click!back"] && $.__views.__alloyId432.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId437!click!showPicker"] && $.__views.__alloyId437.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId478!click!next"] && $.__views.__alloyId478.addEventListener("click", next);
=======
    __defers["$.__views.__alloyId835!click!back"] && $.__views.__alloyId835.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId840!click!showPicker"] && $.__views.__alloyId840.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId881!click!next"] && $.__views.__alloyId881.addEventListener("click", next);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;