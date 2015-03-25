function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function subjectType(e) {
        console.log("subjectType");
        subjectType = e.row.title;
    }
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
    $.__views.__alloyId489 = Alloy.createController("_header", {
        id: "__alloyId489",
        __parentSymbol: $.__views.feedback
    });
    $.__views.__alloyId489.setParent($.__views.feedback);
    $.__views.__alloyId490 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId490"
    });
    $.__views.feedback.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createLabel({
        text: "Feedback",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId491"
    });
    $.__views.__alloyId490.add($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId492"
    });
    $.__views.__alloyId490.add($.__views.__alloyId492);
    back ? $.__views.__alloyId492.addEventListener("click", back) : __defers["$.__views.__alloyId492!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.feedback.add($.__views.scrollView);
    $.__views.__alloyId493 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId493"
    });
    $.__views.scrollView.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createLabel({
        text: "Subject*",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId494"
    });
    $.__views.__alloyId493.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId495"
    });
    $.__views.__alloyId493.add($.__views.__alloyId495);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId495.add($.__views.picker);
    var __alloyId496 = [];
    $.__views.__alloyId497 = Ti.UI.createPickerRow({
        title: "Product Feedback",
        id: "__alloyId497"
    });
    __alloyId496.push($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createPickerRow({
        title: "Customer Service",
        id: "__alloyId498"
    });
    __alloyId496.push($.__views.__alloyId498);
    $.__views.picker.add(__alloyId496);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId499 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId499"
    });
    $.__views.__alloyId495.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createView({
        layout: "horizontal",
        height: "60",
        top: "10",
        id: "__alloyId500"
    });
    $.__views.scrollView.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createLabel({
        text: "Email *",
        color: "black",
        height: "50",
        left: "0",
        width: "30%",
        id: "__alloyId501"
    });
    $.__views.__alloyId500.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createTextField({
        height: "50",
        width: "70%",
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId502"
    });
    $.__views.__alloyId500.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createView({
        layout: "horizontal",
        height: "60",
        top: "10",
        id: "__alloyId503"
    });
    $.__views.scrollView.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createLabel({
        text: "Mobile No. *",
        color: "black",
        height: "50",
        left: "0",
        width: "30%",
        id: "__alloyId504"
    });
    $.__views.__alloyId503.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createTextField({
        height: "50",
        width: "70%",
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId505"
    });
    $.__views.__alloyId503.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createView({
        layout: "vertical",
        height: "160",
        top: "10",
        id: "__alloyId506"
    });
    $.__views.scrollView.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "50",
        left: "0",
        id: "__alloyId507"
    });
    $.__views.__alloyId506.add($.__views.__alloyId507);
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
    $.__views.__alloyId506.add($.__views.textArea);
    $.__views.__alloyId508 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId508"
    });
    $.__views.feedback.add($.__views.__alloyId508);
    $.__views.__alloyId509 = Ti.UI.createLabel({
        text: "Send",
        color: "white",
        id: "__alloyId509"
    });
    $.__views.__alloyId508.add($.__views.__alloyId509);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var subjectType;
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId492!click!back"] && $.__views.__alloyId492.addEventListener("click", back);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;