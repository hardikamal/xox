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
    $.__views.__alloyId596 = Alloy.createController("_header", {
        id: "__alloyId596",
        __parentSymbol: $.__views.hopOn3
    });
    $.__views.__alloyId596.setParent($.__views.hopOn3);
    $.__views.__alloyId597 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId597"
    });
    $.__views.hopOn3.add($.__views.__alloyId597);
    $.__views.__alloyId598 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId598"
    });
    $.__views.__alloyId597.add($.__views.__alloyId598);
    $.__views.__alloyId599 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId599"
    });
    $.__views.__alloyId597.add($.__views.__alloyId599);
    back ? $.__views.__alloyId599.addEventListener("click", back) : __defers["$.__views.__alloyId599!click!back"] = true;
    $.__views.__alloyId600 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId600"
    });
    $.__views.hopOn3.add($.__views.__alloyId600);
    $.__views.__alloyId601 = Ti.UI.createLabel({
        text: "Step 3 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId601"
    });
    $.__views.__alloyId600.add($.__views.__alloyId601);
    $.__views.__alloyId602 = Ti.UI.createLabel({
        text: "Porting Info",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId602"
    });
    $.__views.__alloyId600.add($.__views.__alloyId602);
    $.__views.__alloyId603 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId603"
    });
    $.__views.hopOn3.add($.__views.__alloyId603);
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
    $.__views.__alloyId603.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId603.add($.__views.prepaid_mandatory);
    $.__views.__alloyId604 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        id: "__alloyId604"
    });
    $.__views.hopOn3.add($.__views.__alloyId604);
    $.__views.__alloyId605 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId605"
    });
    $.__views.__alloyId604.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId606"
    });
    $.__views.__alloyId605.add($.__views.__alloyId606);
    $.__views.__alloyId607 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId607"
    });
    $.__views.__alloyId605.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId608"
    });
    $.__views.__alloyId604.add($.__views.__alloyId608);
    $.__views.__alloyId609 = Ti.UI.createLabel({
        text: "Reg Type",
        color: "black",
        id: "__alloyId609"
    });
    $.__views.__alloyId608.add($.__views.__alloyId609);
    $.__views.__alloyId610 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId610"
    });
    $.__views.__alloyId608.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId611"
    });
    $.__views.__alloyId610.add($.__views.__alloyId611);
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
    $.__views.__alloyId611.add($.__views.picker);
    var __alloyId612 = [];
    $.__views.__alloyId613 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId613"
    });
    __alloyId612.push($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId614"
    });
    __alloyId612.push($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId615"
    });
    __alloyId612.push($.__views.__alloyId615);
    $.__views.picker.add(__alloyId612);
    regType ? $.__views.picker.addEventListener("change", regType) : __defers["$.__views.picker!change!regType"] = true;
    $.__views.__alloyId616 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId616"
    });
    $.__views.__alloyId611.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId617"
    });
    $.__views.__alloyId604.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId618"
    });
    $.__views.__alloyId617.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
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
        text: "MOBILE INFO",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "100%"
    });
    $.__views.__alloyId620.add($.__views.prepaid_subtitle);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn3.add($.__views.scrollView);
    $.__views.__alloyId621 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId621"
    });
    $.__views.scrollView.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createLabel({
        text: "Current Mobile Operator",
        color: "black",
        id: "__alloyId622"
    });
    $.__views.__alloyId621.add($.__views.__alloyId622);
    $.__views.__alloyId623 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId623"
    });
    $.__views.__alloyId621.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId624"
    });
    $.__views.__alloyId623.add($.__views.__alloyId624);
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
    $.__views.__alloyId624.add($.__views.picker2);
    var __alloyId625 = [];
    $.__views.__alloyId626 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId626"
    });
    __alloyId625.push($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId627"
    });
    __alloyId625.push($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId628"
    });
    __alloyId625.push($.__views.__alloyId628);
    $.__views.picker2.add(__alloyId625);
    operator ? $.__views.picker2.addEventListener("change", operator) : __defers["$.__views.picker2!change!operator"] = true;
    $.__views.__alloyId629 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId629"
    });
    $.__views.__alloyId624.add($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId630"
    });
    $.__views.scrollView.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createLabel({
        text: "MSISDN (e.g 010xxxxxxxx)",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId631"
    });
    $.__views.__alloyId630.add($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId632"
    });
    $.__views.__alloyId630.add($.__views.__alloyId632);
    $.__views.__alloyId633 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId633"
    });
    $.__views.hopOn3.add($.__views.__alloyId633);
    proceed ? $.__views.__alloyId633.addEventListener("click", proceed) : __defers["$.__views.__alloyId633!click!proceed"] = true;
    $.__views.__alloyId634 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId634"
    });
    $.__views.__alloyId633.add($.__views.__alloyId634);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var regType;
    var operatorType;
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 530;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 530;
    __defers["$.__views.__alloyId599!click!back"] && $.__views.__alloyId599.addEventListener("click", back);
    __defers["$.__views.picker!change!regType"] && $.__views.picker.addEventListener("change", regType);
    __defers["$.__views.picker2!change!operator"] && $.__views.picker2.addEventListener("change", operator);
    __defers["$.__views.__alloyId633!click!proceed"] && $.__views.__alloyId633.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;