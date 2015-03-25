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
        DRAWER.navigation("support", 1);
        console.log("back");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feedback";
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
    $.__views.feedback = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "feedback"
    });
    $.__views.feedback && $.addTopLevelView($.__views.feedback);
    $.__views.__alloyId487 = Alloy.createController("_header", {
        id: "__alloyId487",
        __parentSymbol: $.__views.feedback
    });
    $.__views.__alloyId487.setParent($.__views.feedback);
    $.__views.__alloyId488 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId488"
    });
    $.__views.feedback.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createLabel({
        text: "Feedback",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId489"
    });
    $.__views.__alloyId488.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId490"
    });
    $.__views.__alloyId488.add($.__views.__alloyId490);
    back ? $.__views.__alloyId490.addEventListener("click", back) : __defers["$.__views.__alloyId490!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.feedback.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId491 = Ti.UI.createLabel({
        text: "Subject*",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId491"
    });
    $.__views.contentView.add($.__views.__alloyId491);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.subjectLabel = Ti.UI.createLabel({
        id: "subjectLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.subjectLabel);
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
    var __alloyId492 = [];
    $.__views.__alloyId493 = Ti.UI.createPickerRow({
        title: "Product Feedback",
        id: "__alloyId493"
    });
    __alloyId492.push($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createPickerRow({
        title: "Customer Service",
        id: "__alloyId494"
    });
    __alloyId492.push($.__views.__alloyId494);
    $.__views.picker.add(__alloyId492);
    $.__views.__alloyId495 = Ti.UI.createView({
        layout: "horizontal",
        height: "60",
        top: "10",
        id: "__alloyId495"
    });
    $.__views.scrollView.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createLabel({
        text: "Email *",
        color: "black",
        height: "50",
        left: "0",
        width: "30%",
        id: "__alloyId496"
    });
    $.__views.__alloyId495.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createTextField({
        height: "50",
        width: "70%",
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId497"
    });
    $.__views.__alloyId495.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createView({
        layout: "horizontal",
        height: "60",
        top: "10",
        id: "__alloyId498"
    });
    $.__views.scrollView.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createLabel({
        text: "Mobile No. *",
        color: "black",
        height: "50",
        left: "0",
        width: "30%",
        id: "__alloyId499"
    });
    $.__views.__alloyId498.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createTextField({
        height: "50",
        width: "70%",
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId500"
    });
    $.__views.__alloyId498.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createView({
        layout: "vertical",
        height: "160",
        top: "10",
        id: "__alloyId501"
    });
    $.__views.scrollView.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "50",
        left: "0",
        id: "__alloyId502"
    });
    $.__views.__alloyId501.add($.__views.__alloyId502);
    $.__views.textArea = Ti.UI.createTextArea({
        id: "textArea",
        borderColor: "#F2F2F2",
        borderRadius: "5",
        color: "black",
        textAlign: "left",
        value: "",
        top: "5",
        width: Ti.UI.FILL,
        height: "100"
    });
    $.__views.__alloyId501.add($.__views.textArea);
    $.__views.__alloyId503 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId503"
    });
    $.__views.feedback.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createLabel({
        text: "Send",
        color: "white",
        id: "__alloyId504"
    });
    $.__views.__alloyId503.add($.__views.__alloyId504);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId490!click!back"] && $.__views.__alloyId490.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;