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
    $.__views.__alloyId510 = Alloy.createController("_header", {
        id: "__alloyId510",
        __parentSymbol: $.__views.hopOn2
    });
    $.__views.__alloyId510.setParent($.__views.hopOn2);
    $.__views.__alloyId511 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId511"
    });
    $.__views.hopOn2.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId512"
    });
    $.__views.__alloyId511.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId513"
    });
    $.__views.__alloyId511.add($.__views.__alloyId513);
    back ? $.__views.__alloyId513.addEventListener("click", back) : __defers["$.__views.__alloyId513!click!back"] = true;
    $.__views.__alloyId514 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId514"
    });
    $.__views.hopOn2.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createLabel({
        text: "Step 2 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId515"
    });
    $.__views.__alloyId514.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId516"
    });
    $.__views.__alloyId514.add($.__views.__alloyId516);
    $.__views.__alloyId517 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId517"
    });
    $.__views.hopOn2.add($.__views.__alloyId517);
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
    $.__views.__alloyId517.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId517.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn2.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "80",
        bottom: "5",
        top: "5"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId518 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId518"
    });
    $.__views.contentView.add($.__views.__alloyId518);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.contentView.add($.__views.picker);
    var __alloyId519 = [];
    $.__views.__alloyId520 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId520"
    });
    __alloyId519.push($.__views.__alloyId520);
    $.__views.__alloyId521 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId521"
    });
    __alloyId519.push($.__views.__alloyId521);
    $.__views.__alloyId522 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId522"
    });
    __alloyId519.push($.__views.__alloyId522);
    $.__views.picker.add(__alloyId519);
    $.__views.__alloyId523 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId523"
    });
    $.__views.scrollView.add($.__views.__alloyId523);
    $.__views.__alloyId524 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId524"
    });
    $.__views.__alloyId523.add($.__views.__alloyId524);
    $.__views.__alloyId525 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId525"
    });
    $.__views.__alloyId523.add($.__views.__alloyId525);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId526 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId526"
    });
    $.__views.contentView2.add($.__views.__alloyId526);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.contentView2.add($.__views.picker);
    var __alloyId527 = [];
    $.__views.__alloyId528 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId528"
    });
    __alloyId527.push($.__views.__alloyId528);
    $.__views.__alloyId529 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId529"
    });
    __alloyId527.push($.__views.__alloyId529);
    $.__views.__alloyId530 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId530"
    });
    __alloyId527.push($.__views.__alloyId530);
    $.__views.picker.add(__alloyId527);
    $.__views.__alloyId531 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId531"
    });
    $.__views.scrollView.add($.__views.__alloyId531);
    $.__views.__alloyId532 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId532"
    });
    $.__views.__alloyId531.add($.__views.__alloyId532);
    $.__views.__alloyId533 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId533"
    });
    $.__views.__alloyId531.add($.__views.__alloyId533);
    $.__views.__alloyId534 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId534"
    });
    $.__views.scrollView.add($.__views.__alloyId534);
    $.__views.__alloyId535 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId535"
    });
    $.__views.__alloyId534.add($.__views.__alloyId535);
    $.__views.__alloyId536 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId536"
    });
    $.__views.__alloyId534.add($.__views.__alloyId536);
    $.__views.__alloyId537 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId537"
    });
    $.__views.scrollView.add($.__views.__alloyId537);
    $.__views.__alloyId538 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId538"
    });
    $.__views.__alloyId537.add($.__views.__alloyId538);
    $.__views.__alloyId539 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId539"
    });
    $.__views.__alloyId537.add($.__views.__alloyId539);
    $.__views.__alloyId540 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId540"
    });
    $.__views.hopOn2.add($.__views.__alloyId540);
    proceed ? $.__views.__alloyId540.addEventListener("click", proceed) : __defers["$.__views.__alloyId540!click!proceed"] = true;
    $.__views.__alloyId541 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId541"
    });
    $.__views.__alloyId540.add($.__views.__alloyId541);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId513!click!back"] && $.__views.__alloyId513.addEventListener("click", back);
    __defers["$.__views.__alloyId540!click!proceed"] && $.__views.__alloyId540.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;