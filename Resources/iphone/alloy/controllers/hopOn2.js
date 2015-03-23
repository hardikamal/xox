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
    $.__views.__alloyId321 = Alloy.createController("_header", {
        id: "__alloyId321",
        __parentSymbol: $.__views.hopOn2
    });
    $.__views.__alloyId321.setParent($.__views.hopOn2);
    $.__views.__alloyId322 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId322"
    });
    $.__views.hopOn2.add($.__views.__alloyId322);
    $.__views.__alloyId323 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId323"
    });
    $.__views.__alloyId322.add($.__views.__alloyId323);
    $.__views.__alloyId324 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId324"
    });
    $.__views.__alloyId322.add($.__views.__alloyId324);
    back ? $.__views.__alloyId324.addEventListener("click", back) : __defers["$.__views.__alloyId324!click!back"] = true;
    $.__views.__alloyId325 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId325"
    });
    $.__views.hopOn2.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createLabel({
        text: "Step 2 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId326"
    });
    $.__views.__alloyId325.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId327"
    });
    $.__views.__alloyId325.add($.__views.__alloyId327);
    $.__views.__alloyId328 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId328"
    });
    $.__views.hopOn2.add($.__views.__alloyId328);
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
    $.__views.__alloyId328.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId328.add($.__views.prepaid_mandatory);
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
    $.__views.__alloyId329 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId329"
    });
    $.__views.contentView.add($.__views.__alloyId329);
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
    var __alloyId330 = [];
    $.__views.__alloyId331 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId331"
    });
    __alloyId330.push($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId332"
    });
    __alloyId330.push($.__views.__alloyId332);
    $.__views.__alloyId333 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId333"
    });
    __alloyId330.push($.__views.__alloyId333);
    $.__views.picker.add(__alloyId330);
    $.__views.__alloyId334 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId334"
    });
    $.__views.scrollView.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId335"
    });
    $.__views.__alloyId334.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId336"
    });
    $.__views.__alloyId334.add($.__views.__alloyId336);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId337 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId337"
    });
    $.__views.contentView2.add($.__views.__alloyId337);
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
    var __alloyId338 = [];
    $.__views.__alloyId339 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId339"
    });
    __alloyId338.push($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId340"
    });
    __alloyId338.push($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId341"
    });
    __alloyId338.push($.__views.__alloyId341);
    $.__views.picker.add(__alloyId338);
    $.__views.__alloyId342 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId342"
    });
    $.__views.scrollView.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId343"
    });
    $.__views.__alloyId342.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId344"
    });
    $.__views.__alloyId342.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId345"
    });
    $.__views.scrollView.add($.__views.__alloyId345);
    $.__views.__alloyId346 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId346"
    });
    $.__views.__alloyId345.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId347"
    });
    $.__views.__alloyId345.add($.__views.__alloyId347);
    $.__views.__alloyId348 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId348"
    });
    $.__views.scrollView.add($.__views.__alloyId348);
    $.__views.__alloyId349 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId349"
    });
    $.__views.__alloyId348.add($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId350"
    });
    $.__views.__alloyId348.add($.__views.__alloyId350);
    $.__views.__alloyId351 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId351"
    });
    $.__views.hopOn2.add($.__views.__alloyId351);
    proceed ? $.__views.__alloyId351.addEventListener("click", proceed) : __defers["$.__views.__alloyId351!click!proceed"] = true;
    $.__views.__alloyId352 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId352"
    });
    $.__views.__alloyId351.add($.__views.__alloyId352);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId324!click!back"] && $.__views.__alloyId324.addEventListener("click", back);
    __defers["$.__views.__alloyId351!click!proceed"] && $.__views.__alloyId351.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;