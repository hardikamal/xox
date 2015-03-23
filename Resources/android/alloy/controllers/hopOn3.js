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
    $.__views.__alloyId590 = Alloy.createController("_header", {
        id: "__alloyId590",
        __parentSymbol: $.__views.hopOn3
    });
    $.__views.__alloyId590.setParent($.__views.hopOn3);
    $.__views.__alloyId591 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId591"
    });
    $.__views.hopOn3.add($.__views.__alloyId591);
    $.__views.__alloyId592 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId592"
    });
    $.__views.__alloyId591.add($.__views.__alloyId592);
    $.__views.__alloyId593 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId593"
    });
    $.__views.__alloyId591.add($.__views.__alloyId593);
    back ? $.__views.__alloyId593.addEventListener("click", back) : __defers["$.__views.__alloyId593!click!back"] = true;
    $.__views.__alloyId594 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId594"
    });
    $.__views.hopOn3.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createLabel({
        text: "Step 3 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId595"
    });
    $.__views.__alloyId594.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createLabel({
        text: "Porting Info",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId596"
    });
    $.__views.__alloyId594.add($.__views.__alloyId596);
    $.__views.__alloyId597 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId597"
    });
    $.__views.hopOn3.add($.__views.__alloyId597);
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
    $.__views.__alloyId597.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId597.add($.__views.prepaid_mandatory);
    $.__views.__alloyId598 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        id: "__alloyId598"
    });
    $.__views.hopOn3.add($.__views.__alloyId598);
    $.__views.__alloyId599 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId599"
    });
    $.__views.__alloyId598.add($.__views.__alloyId599);
    $.__views.__alloyId600 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId600"
    });
    $.__views.__alloyId599.add($.__views.__alloyId600);
    $.__views.__alloyId601 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId601"
    });
    $.__views.__alloyId599.add($.__views.__alloyId601);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.__alloyId598.add($.__views.contentView2);
    $.__views.__alloyId602 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId602"
    });
    $.__views.contentView2.add($.__views.__alloyId602);
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
    var __alloyId603 = [];
    $.__views.__alloyId604 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId604"
    });
    __alloyId603.push($.__views.__alloyId604);
    $.__views.__alloyId605 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId605"
    });
    __alloyId603.push($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId606"
    });
    __alloyId603.push($.__views.__alloyId606);
    $.__views.picker.add(__alloyId603);
    $.__views.__alloyId607 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId607"
    });
    $.__views.__alloyId598.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId608"
    });
    $.__views.__alloyId607.add($.__views.__alloyId608);
    $.__views.__alloyId609 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId609"
    });
    $.__views.__alloyId607.add($.__views.__alloyId609);
    $.__views.__alloyId610 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId610"
    });
    $.__views.hopOn3.add($.__views.__alloyId610);
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
    $.__views.__alloyId610.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId611 = Ti.UI.createLabel({
        text: "Current Mobile Operator",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId611"
    });
    $.__views.contentView3.add($.__views.__alloyId611);
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
    var __alloyId612 = [];
    $.__views.__alloyId613 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId613"
    });
    __alloyId612.push($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createPickerRow({
        title: "Digi",
        id: "__alloyId614"
    });
    __alloyId612.push($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createPickerRow({
        title: "Maxis",
        id: "__alloyId615"
    });
    __alloyId612.push($.__views.__alloyId615);
    $.__views.picker.add(__alloyId612);
    $.__views.__alloyId616 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId616"
    });
    $.__views.scrollView.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createLabel({
        text: "MSISDN (e.g 010xxxxxxxx)",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId617"
    });
    $.__views.__alloyId616.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId618"
    });
    $.__views.__alloyId616.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId619"
    });
    $.__views.hopOn3.add($.__views.__alloyId619);
    proceed ? $.__views.__alloyId619.addEventListener("click", proceed) : __defers["$.__views.__alloyId619!click!proceed"] = true;
    $.__views.__alloyId620 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId620"
    });
    $.__views.__alloyId619.add($.__views.__alloyId620);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 515;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 515;
    __defers["$.__views.__alloyId593!click!back"] && $.__views.__alloyId593.addEventListener("click", back);
    __defers["$.__views.__alloyId619!click!proceed"] && $.__views.__alloyId619.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;