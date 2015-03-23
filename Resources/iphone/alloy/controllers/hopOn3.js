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
    $.__views.__alloyId549 = Alloy.createController("_header", {
        id: "__alloyId549",
        __parentSymbol: $.__views.hopOn3
    });
    $.__views.__alloyId549.setParent($.__views.hopOn3);
    $.__views.__alloyId550 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId550"
    });
    $.__views.hopOn3.add($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId551"
    });
    $.__views.__alloyId550.add($.__views.__alloyId551);
    $.__views.__alloyId552 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId552"
    });
    $.__views.__alloyId550.add($.__views.__alloyId552);
    back ? $.__views.__alloyId552.addEventListener("click", back) : __defers["$.__views.__alloyId552!click!back"] = true;
    $.__views.__alloyId553 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId553"
    });
    $.__views.hopOn3.add($.__views.__alloyId553);
    $.__views.__alloyId554 = Ti.UI.createLabel({
        text: "Step 3 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId554"
    });
    $.__views.__alloyId553.add($.__views.__alloyId554);
    $.__views.__alloyId555 = Ti.UI.createLabel({
        text: "Porting Info",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId555"
    });
    $.__views.__alloyId553.add($.__views.__alloyId555);
    $.__views.__alloyId556 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId556"
    });
    $.__views.hopOn3.add($.__views.__alloyId556);
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
    $.__views.__alloyId556.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId556.add($.__views.prepaid_mandatory);
    $.__views.__alloyId557 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        id: "__alloyId557"
    });
    $.__views.hopOn3.add($.__views.__alloyId557);
    $.__views.__alloyId558 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId558"
    });
    $.__views.__alloyId557.add($.__views.__alloyId558);
    $.__views.__alloyId559 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId559"
    });
    $.__views.__alloyId558.add($.__views.__alloyId559);
    $.__views.__alloyId560 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId560"
    });
    $.__views.__alloyId558.add($.__views.__alloyId560);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.__alloyId557.add($.__views.contentView2);
    $.__views.__alloyId561 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId561"
    });
    $.__views.contentView2.add($.__views.__alloyId561);
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
    var __alloyId562 = [];
    $.__views.__alloyId563 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId563"
    });
    __alloyId562.push($.__views.__alloyId563);
    $.__views.__alloyId564 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId564"
    });
    __alloyId562.push($.__views.__alloyId564);
    $.__views.__alloyId565 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId565"
    });
    __alloyId562.push($.__views.__alloyId565);
    $.__views.picker.add(__alloyId562);
    $.__views.__alloyId566 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId566"
    });
    $.__views.__alloyId557.add($.__views.__alloyId566);
    $.__views.__alloyId567 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId567"
    });
    $.__views.__alloyId566.add($.__views.__alloyId567);
    $.__views.__alloyId568 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId568"
    });
    $.__views.__alloyId566.add($.__views.__alloyId568);
    $.__views.__alloyId569 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId569"
    });
    $.__views.hopOn3.add($.__views.__alloyId569);
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
    $.__views.__alloyId569.add($.__views.prepaid_subtitle);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn3.add($.__views.scrollView);
    $.__views.contentView3 = Ti.UI.createView({
        id: "contentView3",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView3);
    $.__views.__alloyId570 = Ti.UI.createLabel({
        text: "Current Mobile Operator",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId570"
    });
    $.__views.contentView3.add($.__views.__alloyId570);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.contentView3.add($.__views.picker);
    var __alloyId571 = [];
    $.__views.__alloyId572 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId572"
    });
    __alloyId571.push($.__views.__alloyId572);
    $.__views.__alloyId573 = Ti.UI.createPickerRow({
        title: "Digi",
        id: "__alloyId573"
    });
    __alloyId571.push($.__views.__alloyId573);
    $.__views.__alloyId574 = Ti.UI.createPickerRow({
        title: "Maxis",
        id: "__alloyId574"
    });
    __alloyId571.push($.__views.__alloyId574);
    $.__views.picker.add(__alloyId571);
    $.__views.__alloyId575 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId575"
    });
    $.__views.scrollView.add($.__views.__alloyId575);
    $.__views.__alloyId576 = Ti.UI.createLabel({
        text: "MSISDN (e.g 010xxxxxxxx)",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId576"
    });
    $.__views.__alloyId575.add($.__views.__alloyId576);
    $.__views.__alloyId577 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId577"
    });
    $.__views.__alloyId575.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId578"
    });
    $.__views.hopOn3.add($.__views.__alloyId578);
    proceed ? $.__views.__alloyId578.addEventListener("click", proceed) : __defers["$.__views.__alloyId578!click!proceed"] = true;
    $.__views.__alloyId579 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId579"
    });
    $.__views.__alloyId578.add($.__views.__alloyId579);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 515;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 515;
    }
    __defers["$.__views.__alloyId552!click!back"] && $.__views.__alloyId552.addEventListener("click", back);
    __defers["$.__views.__alloyId578!click!proceed"] && $.__views.__alloyId578.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;