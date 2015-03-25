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
    function regType(e) {
        console.log("simType");
        regType = e.row.title;
    }
    function operator(e) {
        console.log("operatorType");
        operatorType = e.row.title;
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
    $.__views.__alloyId613 = Alloy.createController("_header", {
        id: "__alloyId613",
        __parentSymbol: $.__views.hopOn3
    });
    $.__views.__alloyId613.setParent($.__views.hopOn3);
    $.__views.__alloyId614 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId614"
    });
    $.__views.hopOn3.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId615"
    });
    $.__views.__alloyId614.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId616"
    });
    $.__views.__alloyId614.add($.__views.__alloyId616);
    back ? $.__views.__alloyId616.addEventListener("click", back) : __defers["$.__views.__alloyId616!click!back"] = true;
    $.__views.__alloyId617 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId617"
    });
    $.__views.hopOn3.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createLabel({
        text: "Step 3 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId618"
    });
    $.__views.__alloyId617.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createLabel({
        text: "Porting Info",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId619"
    });
    $.__views.__alloyId617.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId620"
    });
    $.__views.hopOn3.add($.__views.__alloyId620);
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
    $.__views.__alloyId620.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId620.add($.__views.prepaid_mandatory);
    $.__views.__alloyId621 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        id: "__alloyId621"
    });
    $.__views.hopOn3.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId622"
    });
    $.__views.__alloyId621.add($.__views.__alloyId622);
    $.__views.__alloyId623 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId623"
    });
    $.__views.__alloyId622.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId624"
    });
    $.__views.__alloyId622.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId625"
    });
    $.__views.__alloyId621.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createLabel({
        text: "Reg Type",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId626"
    });
    $.__views.__alloyId625.add($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId627"
    });
    $.__views.__alloyId625.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId628"
    });
    $.__views.__alloyId627.add($.__views.__alloyId628);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        top: "10",
        bottom: "10",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId628.add($.__views.picker);
    var __alloyId629 = [];
    $.__views.__alloyId630 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId630"
    });
    __alloyId629.push($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId631"
    });
    __alloyId629.push($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId632"
    });
    __alloyId629.push($.__views.__alloyId632);
    $.__views.picker.add(__alloyId629);
    regType ? $.__views.picker.addEventListener("change", regType) : __defers["$.__views.picker!change!regType"] = true;
    $.__views.__alloyId633 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId633"
    });
    $.__views.__alloyId628.add($.__views.__alloyId633);
    $.__views.__alloyId634 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId634"
    });
    $.__views.__alloyId621.add($.__views.__alloyId634);
    $.__views.__alloyId635 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId635"
    });
    $.__views.__alloyId634.add($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId636"
    });
    $.__views.__alloyId634.add($.__views.__alloyId636);
    $.__views.__alloyId637 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId637"
    });
    $.__views.hopOn3.add($.__views.__alloyId637);
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
    $.__views.__alloyId637.add($.__views.prepaid_subtitle);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn3.add($.__views.scrollView);
    $.__views.__alloyId638 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId638"
    });
    $.__views.scrollView.add($.__views.__alloyId638);
    $.__views.__alloyId639 = Ti.UI.createLabel({
        text: "Current Mobile Operator",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId639"
    });
    $.__views.__alloyId638.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId640"
    });
    $.__views.__alloyId638.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId641"
    });
    $.__views.__alloyId640.add($.__views.__alloyId641);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        top: "10",
        bottom: "10",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId641.add($.__views.picker2);
    var __alloyId642 = [];
    $.__views.__alloyId643 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId643"
    });
    __alloyId642.push($.__views.__alloyId643);
    $.__views.__alloyId644 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId644"
    });
    __alloyId642.push($.__views.__alloyId644);
    $.__views.__alloyId645 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId645"
    });
    __alloyId642.push($.__views.__alloyId645);
    $.__views.picker2.add(__alloyId642);
    operator ? $.__views.picker2.addEventListener("change", operator) : __defers["$.__views.picker2!change!operator"] = true;
    $.__views.__alloyId646 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId646"
    });
    $.__views.__alloyId641.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId647"
    });
    $.__views.scrollView.add($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createLabel({
        text: "MSISDN (e.g 010xxxxxxxx)",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId648"
    });
    $.__views.__alloyId647.add($.__views.__alloyId648);
    $.__views.__alloyId649 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId649"
    });
    $.__views.__alloyId647.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId650"
    });
    $.__views.hopOn3.add($.__views.__alloyId650);
    proceed ? $.__views.__alloyId650.addEventListener("click", proceed) : __defers["$.__views.__alloyId650!click!proceed"] = true;
    $.__views.__alloyId651 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId651"
    });
    $.__views.__alloyId650.add($.__views.__alloyId651);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var regType;
    var operatorType;
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 530;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 530;
    __defers["$.__views.__alloyId616!click!back"] && $.__views.__alloyId616.addEventListener("click", back);
    __defers["$.__views.picker!change!regType"] && $.__views.picker.addEventListener("change", regType);
    __defers["$.__views.picker2!change!operator"] && $.__views.picker2.addEventListener("change", operator);
    __defers["$.__views.__alloyId650!click!proceed"] && $.__views.__alloyId650.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;