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
    $.__views.__alloyId353 = Alloy.createController("_header", {
        id: "__alloyId353",
        __parentSymbol: $.__views.hopOn3
    });
    $.__views.__alloyId353.setParent($.__views.hopOn3);
    $.__views.__alloyId354 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId354"
    });
    $.__views.hopOn3.add($.__views.__alloyId354);
    $.__views.__alloyId355 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId355"
    });
    $.__views.__alloyId354.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId356"
    });
    $.__views.__alloyId354.add($.__views.__alloyId356);
    back ? $.__views.__alloyId356.addEventListener("click", back) : __defers["$.__views.__alloyId356!click!back"] = true;
    $.__views.__alloyId357 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId357"
    });
    $.__views.hopOn3.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createLabel({
        text: "Step 3 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId358"
    });
    $.__views.__alloyId357.add($.__views.__alloyId358);
    $.__views.__alloyId359 = Ti.UI.createLabel({
        text: "Porting Info",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId359"
    });
    $.__views.__alloyId357.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId360"
    });
    $.__views.hopOn3.add($.__views.__alloyId360);
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
    $.__views.__alloyId360.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId360.add($.__views.prepaid_mandatory);
    $.__views.__alloyId361 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        id: "__alloyId361"
    });
    $.__views.hopOn3.add($.__views.__alloyId361);
    $.__views.__alloyId362 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId362"
    });
    $.__views.__alloyId361.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId363"
    });
    $.__views.__alloyId362.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId364"
    });
    $.__views.__alloyId362.add($.__views.__alloyId364);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.__alloyId361.add($.__views.contentView2);
    $.__views.__alloyId365 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId365"
    });
    $.__views.contentView2.add($.__views.__alloyId365);
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
    var __alloyId366 = [];
    $.__views.__alloyId367 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId367"
    });
    __alloyId366.push($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId368"
    });
    __alloyId366.push($.__views.__alloyId368);
    $.__views.__alloyId369 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId369"
    });
    __alloyId366.push($.__views.__alloyId369);
    $.__views.picker.add(__alloyId366);
    $.__views.__alloyId370 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId370"
    });
    $.__views.__alloyId361.add($.__views.__alloyId370);
    $.__views.__alloyId371 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId371"
    });
    $.__views.__alloyId370.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId372"
    });
    $.__views.__alloyId370.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId373"
    });
    $.__views.hopOn3.add($.__views.__alloyId373);
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
    $.__views.__alloyId373.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId374 = Ti.UI.createLabel({
        text: "Current Mobile Operator",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId374"
    });
    $.__views.contentView3.add($.__views.__alloyId374);
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
    var __alloyId375 = [];
    $.__views.__alloyId376 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId376"
    });
    __alloyId375.push($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createPickerRow({
        title: "Digi",
        id: "__alloyId377"
    });
    __alloyId375.push($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createPickerRow({
        title: "Maxis",
        id: "__alloyId378"
    });
    __alloyId375.push($.__views.__alloyId378);
    $.__views.picker.add(__alloyId375);
    $.__views.__alloyId379 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId379"
    });
    $.__views.scrollView.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createLabel({
        text: "MSISDN (e.g 010xxxxxxxx)",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId380"
    });
    $.__views.__alloyId379.add($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId381"
    });
    $.__views.__alloyId379.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId382"
    });
    $.__views.hopOn3.add($.__views.__alloyId382);
    proceed ? $.__views.__alloyId382.addEventListener("click", proceed) : __defers["$.__views.__alloyId382!click!proceed"] = true;
    $.__views.__alloyId383 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId383"
    });
    $.__views.__alloyId382.add($.__views.__alloyId383);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 515;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 515;
    }
    __defers["$.__views.__alloyId356!click!back"] && $.__views.__alloyId356.addEventListener("click", back);
    __defers["$.__views.__alloyId382!click!proceed"] && $.__views.__alloyId382.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;