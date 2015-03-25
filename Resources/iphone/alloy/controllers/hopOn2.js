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
        DRAWER.navigation("hopOn", 1);
    }
    function proceed() {
        DRAWER.navigation("hopOn3", 1);
        console.log("proceed");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hopOn2";
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
    $.__views.hopOn2 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOn2"
    });
    $.__views.hopOn2 && $.addTopLevelView($.__views.hopOn2);
    $.__views.__alloyId568 = Alloy.createController("_header", {
        id: "__alloyId568",
        __parentSymbol: $.__views.hopOn2
    });
    $.__views.__alloyId568.setParent($.__views.hopOn2);
    $.__views.__alloyId569 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId569"
    });
    $.__views.hopOn2.add($.__views.__alloyId569);
    $.__views.__alloyId570 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId570"
    });
    $.__views.__alloyId569.add($.__views.__alloyId570);
    $.__views.__alloyId571 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId571"
    });
    $.__views.__alloyId569.add($.__views.__alloyId571);
    back ? $.__views.__alloyId571.addEventListener("click", back) : __defers["$.__views.__alloyId571!click!back"] = true;
    $.__views.__alloyId572 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId572"
    });
    $.__views.hopOn2.add($.__views.__alloyId572);
    $.__views.__alloyId573 = Ti.UI.createLabel({
        text: "Step 2 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId573"
    });
    $.__views.__alloyId572.add($.__views.__alloyId573);
    $.__views.__alloyId574 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId574"
    });
    $.__views.__alloyId572.add($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId575"
    });
    $.__views.hopOn2.add($.__views.__alloyId575);
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
    $.__views.__alloyId575.add($.__views.prepaid_subtitle);
    $.__views.prepaid_mandatory = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "*Please fill in the Mandatory field",
        id: "prepaid_mandatory",
        backgroundColor: "transparent",
        color: "black",
        width: "50%",
        top: "5"
    });
    $.__views.__alloyId575.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn2.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId576 = Ti.UI.createLabel({
        text: "Salutation",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId576"
    });
    $.__views.contentView.add($.__views.__alloyId576);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        top: "10",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.salutationLabel = Ti.UI.createLabel({
        id: "salutationLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.salutationLabel);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        bottom: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
    var __alloyId577 = [];
    $.__views.__alloyId578 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId578"
    });
    __alloyId577.push($.__views.__alloyId578);
    $.__views.__alloyId579 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId579"
    });
    __alloyId577.push($.__views.__alloyId579);
    $.__views.__alloyId580 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId580"
    });
    __alloyId577.push($.__views.__alloyId580);
    $.__views.picker.add(__alloyId577);
    $.__views.__alloyId581 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId581"
    });
    $.__views.scrollView.add($.__views.__alloyId581);
    $.__views.__alloyId582 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId582"
    });
    $.__views.__alloyId581.add($.__views.__alloyId582);
    $.__views.__alloyId583 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId583"
    });
    $.__views.__alloyId581.add($.__views.__alloyId583);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId584 = Ti.UI.createLabel({
        text: "Reg Type",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId584"
    });
    $.__views.contentView2.add($.__views.__alloyId584);
    $.__views.pickerContentView2 = Ti.UI.createView({
        id: "pickerContentView2",
        layout: "composite",
        top: "10",
        width: "70%"
    });
    $.__views.contentView2.add($.__views.pickerContentView2);
    $.__views.regTypeLabel2 = Ti.UI.createLabel({
        id: "regTypeLabel2",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView2.add($.__views.regTypeLabel2);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        bottom: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView2.add($.__views.picker2);
    var __alloyId585 = [];
    $.__views.__alloyId586 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId586"
    });
    __alloyId585.push($.__views.__alloyId586);
    $.__views.__alloyId587 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId587"
    });
    __alloyId585.push($.__views.__alloyId587);
    $.__views.__alloyId588 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId588"
    });
    __alloyId585.push($.__views.__alloyId588);
    $.__views.picker2.add(__alloyId585);
    $.__views.__alloyId589 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId589"
    });
    $.__views.scrollView.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId590"
    });
    $.__views.__alloyId589.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId591"
    });
    $.__views.__alloyId589.add($.__views.__alloyId591);
    $.__views.__alloyId592 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId592"
    });
    $.__views.scrollView.add($.__views.__alloyId592);
    $.__views.__alloyId593 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId593"
    });
    $.__views.__alloyId592.add($.__views.__alloyId593);
    $.__views.__alloyId594 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId594"
    });
    $.__views.__alloyId592.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId595"
    });
    $.__views.scrollView.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId596"
    });
    $.__views.__alloyId595.add($.__views.__alloyId596);
    $.__views.__alloyId597 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId597"
    });
    $.__views.__alloyId595.add($.__views.__alloyId597);
    $.__views.__alloyId598 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId598"
    });
    $.__views.hopOn2.add($.__views.__alloyId598);
    proceed ? $.__views.__alloyId598.addEventListener("click", proceed) : __defers["$.__views.__alloyId598!click!proceed"] = true;
    $.__views.__alloyId599 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId599"
    });
    $.__views.__alloyId598.add($.__views.__alloyId599);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId571!click!back"] && $.__views.__alloyId571.addEventListener("click", back);
    __defers["$.__views.__alloyId598!click!proceed"] && $.__views.__alloyId598.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;