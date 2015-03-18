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
    $.__views.__alloyId312 = Alloy.createController("_header", {
        id: "__alloyId312",
        __parentSymbol: $.__views.hopOn3
    });
    $.__views.__alloyId312.setParent($.__views.hopOn3);
    $.__views.__alloyId313 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId313"
    });
    $.__views.hopOn3.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId314"
    });
    $.__views.__alloyId313.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId315"
    });
    $.__views.__alloyId313.add($.__views.__alloyId315);
    back ? $.__views.__alloyId315.addEventListener("click", back) : __defers["$.__views.__alloyId315!click!back"] = true;
    $.__views.__alloyId316 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId316"
    });
    $.__views.hopOn3.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createLabel({
        text: "Step 3 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createLabel({
        text: "Porting Info",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId318"
    });
    $.__views.__alloyId316.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId319"
    });
    $.__views.hopOn3.add($.__views.__alloyId319);
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
    $.__views.__alloyId319.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId319.add($.__views.prepaid_mandatory);
    $.__views.__alloyId320 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        id: "__alloyId320"
    });
    $.__views.hopOn3.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId321"
    });
    $.__views.__alloyId320.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId322"
    });
    $.__views.__alloyId321.add($.__views.__alloyId322);
    $.__views.__alloyId323 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId323"
    });
    $.__views.__alloyId321.add($.__views.__alloyId323);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.__alloyId320.add($.__views.contentView2);
    $.__views.__alloyId324 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId324"
    });
    $.__views.contentView2.add($.__views.__alloyId324);
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
    var __alloyId325 = [];
    $.__views.__alloyId326 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId326"
    });
    __alloyId325.push($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId327"
    });
    __alloyId325.push($.__views.__alloyId327);
    $.__views.__alloyId328 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId328"
    });
    __alloyId325.push($.__views.__alloyId328);
    $.__views.picker.add(__alloyId325);
    $.__views.__alloyId329 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId329"
    });
    $.__views.__alloyId320.add($.__views.__alloyId329);
    $.__views.__alloyId330 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId330"
    });
    $.__views.__alloyId329.add($.__views.__alloyId330);
    $.__views.__alloyId331 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId331"
    });
    $.__views.__alloyId329.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId332"
    });
    $.__views.hopOn3.add($.__views.__alloyId332);
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
    $.__views.__alloyId332.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId333 = Ti.UI.createLabel({
        text: "Current Mobile Operator",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId333"
    });
    $.__views.contentView3.add($.__views.__alloyId333);
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
    var __alloyId334 = [];
    $.__views.__alloyId335 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId335"
    });
    __alloyId334.push($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createPickerRow({
        title: "Digi",
        id: "__alloyId336"
    });
    __alloyId334.push($.__views.__alloyId336);
    $.__views.__alloyId337 = Ti.UI.createPickerRow({
        title: "Maxis",
        id: "__alloyId337"
    });
    __alloyId334.push($.__views.__alloyId337);
    $.__views.picker.add(__alloyId334);
    $.__views.__alloyId338 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId338"
    });
    $.__views.scrollView.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createLabel({
        text: "MSISDN (e.g 010xxxxxxxx)",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId339"
    });
    $.__views.__alloyId338.add($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId340"
    });
    $.__views.__alloyId338.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId341"
    });
    $.__views.hopOn3.add($.__views.__alloyId341);
    proceed ? $.__views.__alloyId341.addEventListener("click", proceed) : __defers["$.__views.__alloyId341!click!proceed"] = true;
    $.__views.__alloyId342 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId342"
    });
    $.__views.__alloyId341.add($.__views.__alloyId342);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 470;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 470;
    __defers["$.__views.__alloyId315!click!back"] && $.__views.__alloyId315.addEventListener("click", back);
    __defers["$.__views.__alloyId341!click!proceed"] && $.__views.__alloyId341.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;