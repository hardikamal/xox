function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function plan(e) {
        console.log("plan");
        plan = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.planLabel.text = plan);
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
            $.contentView.height = 100;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function done() {
        console.log("done");
        $.contentView.height = 100;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
    }
    function back() {
        DRAWER.navigation("internetManagement", 1);
    }
    function submit() {
        console.log("submit");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "internetManagement2";
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
    $.__views.internetManagement2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "internetManagement2"
    });
    $.__views.internetManagement2 && $.addTopLevelView($.__views.internetManagement2);
    $.__views.__alloyId984 = Alloy.createController("_header", {
        id: "__alloyId984",
        __parentSymbol: $.__views.internetManagement2
    });
    $.__views.__alloyId984.setParent($.__views.internetManagement2);
    $.__views.__alloyId985 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId985"
    });
    $.__views.internetManagement2.add($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId986"
    });
    $.__views.__alloyId985.add($.__views.__alloyId986);
    $.__views.__alloyId987 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId987"
    });
    $.__views.__alloyId985.add($.__views.__alloyId987);
    back ? $.__views.__alloyId987.addEventListener("click", back) : __defers["$.__views.__alloyId987!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement2.add($.__views.scrollView);
    $.__views.__alloyId988 = Ti.UI.createView({
        height: "50",
        id: "__alloyId988"
    });
    $.__views.scrollView.add($.__views.__alloyId988);
    $.__views.__alloyId989 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId989"
    });
    $.__views.__alloyId988.add($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId990"
    });
    $.__views.scrollView.add($.__views.__alloyId990);
    $.__views.__alloyId991 = Ti.UI.createView({
        height: "50",
        id: "__alloyId991"
    });
    $.__views.scrollView.add($.__views.__alloyId991);
    $.__views.__alloyId992 = Ti.UI.createLabel({
        text: "Current Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId992"
    });
    $.__views.__alloyId991.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId993"
    });
    $.__views.scrollView.add($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createView({
        height: "50",
        id: "__alloyId994"
    });
    $.__views.scrollView.add($.__views.__alloyId994);
    $.__views.__alloyId995 = Ti.UI.createLabel({
        text: "Current Postpaid Available Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId995"
    });
    $.__views.__alloyId994.add($.__views.__alloyId995);
    $.__views.__alloyId996 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId996"
    });
    $.__views.scrollView.add($.__views.__alloyId996);
    $.__views.__alloyId997 = Ti.UI.createView({
        height: "50",
        id: "__alloyId997"
    });
    $.__views.scrollView.add($.__views.__alloyId997);
    $.__views.__alloyId998 = Ti.UI.createLabel({
        text: "Currently Prepaid Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId998"
    });
    $.__views.__alloyId997.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId999"
    });
    $.__views.scrollView.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1000"
    });
    $.__views.scrollView.add($.__views.__alloyId1000);
    $.__views.__alloyId1001 = Ti.UI.createLabel({
        text: "Currently EWallet Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1001"
    });
    $.__views.__alloyId1000.add($.__views.__alloyId1001);
    $.__views.__alloyId1002 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1002"
    });
    $.__views.scrollView.add($.__views.__alloyId1002);
    $.__views.__alloyId1003 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1003"
    });
    $.__views.scrollView.add($.__views.__alloyId1003);
    $.__views.__alloyId1004 = Ti.UI.createLabel({
        text: "Season Pass Data Counter (MB) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1004"
    });
    $.__views.__alloyId1003.add($.__views.__alloyId1004);
    $.__views.__alloyId1005 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1005"
    });
    $.__views.scrollView.add($.__views.__alloyId1005);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "100"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1006 = Ti.UI.createLabel({
        text: "Subscribe / Upgrade to :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId1006"
    });
    $.__views.contentView.add($.__views.__alloyId1006);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.planLabel = Ti.UI.createLabel({
        id: "planLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.planLabel);
    showPicker ? $.__views.planLabel.addEventListener("click", showPicker) : __defers["$.__views.planLabel!click!showPicker"] = true;
    $.__views.__alloyId1007 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1007"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1007);
    showPicker ? $.__views.__alloyId1007.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1007!click!showPicker"] = true;
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
    var __alloyId1008 = [];
    $.__views.__alloyId1009 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1009"
    });
    __alloyId1008.push($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1010"
    });
    __alloyId1008.push($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1011"
    });
    __alloyId1008.push($.__views.__alloyId1011);
    $.__views.__alloyId1012 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1012"
    });
    __alloyId1008.push($.__views.__alloyId1012);
    $.__views.picker.add(__alloyId1008);
    plan ? $.__views.picker.addEventListener("change", plan) : __defers["$.__views.picker!change!plan"] = true;
    $.__views.__alloyId1013 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1013"
    });
    $.__views.scrollView.add($.__views.__alloyId1013);
    $.__views.__alloyId1014 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1014"
    });
    $.__views.internetManagement2.add($.__views.__alloyId1014);
    submit ? $.__views.__alloyId1014.addEventListener("click", submit) : __defers["$.__views.__alloyId1014!click!submit"] = true;
    $.__views.__alloyId1015 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        id: "__alloyId1015"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1015);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
        $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
    }
    var plan;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId987!click!back"] && $.__views.__alloyId987.addEventListener("click", back);
    __defers["$.__views.planLabel!click!showPicker"] && $.__views.planLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1007!click!showPicker"] && $.__views.__alloyId1007.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!plan"] && $.__views.picker.addEventListener("change", plan);
    __defers["$.__views.__alloyId1014!click!submit"] && $.__views.__alloyId1014.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;