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
        DRAWER.navigation("hopOn2", 1);
    }
    function proceed() {
        DRAWER.navigation("hopOn4", 1);
        console.log("proceed");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hopOn3";
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
    $.__views.hopOn3 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOn3"
    });
    $.__views.hopOn3 && $.addTopLevelView($.__views.hopOn3);
    $.__views.__alloyId535 = Alloy.createController("_header", {
        id: "__alloyId535",
        __parentSymbol: $.__views.hopOn3
    });
    $.__views.__alloyId535.setParent($.__views.hopOn3);
    $.__views.__alloyId536 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId536"
    });
    $.__views.hopOn3.add($.__views.__alloyId536);
    $.__views.__alloyId537 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId537"
    });
    $.__views.__alloyId536.add($.__views.__alloyId537);
    $.__views.__alloyId538 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId538"
    });
    $.__views.__alloyId536.add($.__views.__alloyId538);
    back ? $.__views.__alloyId538.addEventListener("click", back) : __defers["$.__views.__alloyId538!click!back"] = true;
    $.__views.__alloyId539 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId539"
    });
    $.__views.hopOn3.add($.__views.__alloyId539);
    $.__views.__alloyId540 = Ti.UI.createLabel({
        text: "Step 3 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId540"
    });
    $.__views.__alloyId539.add($.__views.__alloyId540);
    $.__views.__alloyId541 = Ti.UI.createLabel({
        text: "Porting Info",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId541"
    });
    $.__views.__alloyId539.add($.__views.__alloyId541);
    $.__views.__alloyId542 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId542"
    });
    $.__views.hopOn3.add($.__views.__alloyId542);
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "HOPON DETAILS",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "38%"
    });
    $.__views.__alloyId542.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId542.add($.__views.prepaid_mandatory);
    $.__views.__alloyId543 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        id: "__alloyId543"
    });
    $.__views.hopOn3.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId544"
    });
    $.__views.__alloyId543.add($.__views.__alloyId544);
    $.__views.__alloyId545 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId545"
    });
    $.__views.__alloyId544.add($.__views.__alloyId545);
    $.__views.__alloyId546 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId546"
    });
    $.__views.__alloyId544.add($.__views.__alloyId546);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId543.add($.__views.contentView);
    $.__views.__alloyId547 = Ti.UI.createLabel({
        text: "Reg Type",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId547"
    });
    $.__views.contentView.add($.__views.__alloyId547);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        top: "10",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.regTypeLabel = Ti.UI.createLabel({
        id: "regTypeLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.regTypeLabel);
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
    var __alloyId548 = [];
    $.__views.__alloyId549 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId549"
    });
    __alloyId548.push($.__views.__alloyId549);
    $.__views.__alloyId550 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId550"
    });
    __alloyId548.push($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId551"
    });
    __alloyId548.push($.__views.__alloyId551);
    $.__views.picker.add(__alloyId548);
    $.__views.__alloyId552 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId552"
    });
    $.__views.__alloyId543.add($.__views.__alloyId552);
    $.__views.__alloyId553 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId553"
    });
    $.__views.__alloyId552.add($.__views.__alloyId553);
    $.__views.__alloyId554 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId554"
    });
    $.__views.__alloyId552.add($.__views.__alloyId554);
    $.__views.__alloyId555 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId555"
    });
    $.__views.hopOn3.add($.__views.__alloyId555);
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "MOBILE INFO",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "100%"
    });
    $.__views.__alloyId555.add($.__views.prepaid_subtitle);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn3.add($.__views.scrollView);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId556 = Ti.UI.createLabel({
        text: "Current Mobile Operator",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId556"
    });
    $.__views.contentView2.add($.__views.__alloyId556);
    $.__views.pickerContentView2 = Ti.UI.createView({
        id: "pickerContentView2",
        layout: "composite",
        top: "10",
        width: "70%"
    });
    $.__views.contentView2.add($.__views.pickerContentView2);
    $.__views.operatorLabel = Ti.UI.createLabel({
        id: "operatorLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView2.add($.__views.operatorLabel);
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
    var __alloyId557 = [];
    $.__views.__alloyId558 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId558"
    });
    __alloyId557.push($.__views.__alloyId558);
    $.__views.__alloyId559 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId559"
    });
    __alloyId557.push($.__views.__alloyId559);
    $.__views.__alloyId560 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId560"
    });
    __alloyId557.push($.__views.__alloyId560);
    $.__views.picker2.add(__alloyId557);
    $.__views.__alloyId561 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId561"
    });
    $.__views.scrollView.add($.__views.__alloyId561);
    $.__views.__alloyId562 = Ti.UI.createLabel({
        text: "MSISDN (e.g 010xxxxxxxx)",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId562"
    });
    $.__views.__alloyId561.add($.__views.__alloyId562);
    $.__views.__alloyId563 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId563"
    });
    $.__views.__alloyId561.add($.__views.__alloyId563);
    $.__views.__alloyId564 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId564"
    });
    $.__views.hopOn3.add($.__views.__alloyId564);
    proceed ? $.__views.__alloyId564.addEventListener("click", proceed) : __defers["$.__views.__alloyId564!click!proceed"] = true;
    $.__views.__alloyId565 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId565"
    });
    $.__views.__alloyId564.add($.__views.__alloyId565);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 530;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 530;
    }
    __defers["$.__views.__alloyId538!click!back"] && $.__views.__alloyId538.addEventListener("click", back);
    __defers["$.__views.__alloyId564!click!proceed"] && $.__views.__alloyId564.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;