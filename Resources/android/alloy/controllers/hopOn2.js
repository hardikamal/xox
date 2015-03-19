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
    $.__views.__alloyId282 = Alloy.createController("_header", {
        id: "__alloyId282",
        __parentSymbol: $.__views.hopOn2
    });
    $.__views.__alloyId282.setParent($.__views.hopOn2);
    $.__views.__alloyId283 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId283"
    });
    $.__views.hopOn2.add($.__views.__alloyId283);
    $.__views.__alloyId284 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId284"
    });
    $.__views.__alloyId283.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId285"
    });
    $.__views.__alloyId283.add($.__views.__alloyId285);
    back ? $.__views.__alloyId285.addEventListener("click", back) : __defers["$.__views.__alloyId285!click!back"] = true;
    $.__views.__alloyId286 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId286"
    });
    $.__views.hopOn2.add($.__views.__alloyId286);
    $.__views.__alloyId287 = Ti.UI.createLabel({
        text: "Step 2 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId287"
    });
    $.__views.__alloyId286.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId288"
    });
    $.__views.__alloyId286.add($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId289"
    });
    $.__views.hopOn2.add($.__views.__alloyId289);
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
    $.__views.__alloyId289.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId289.add($.__views.prepaid_mandatory);
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
    $.__views.__alloyId290 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId290"
    });
    $.__views.contentView.add($.__views.__alloyId290);
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
    var __alloyId291 = [];
    $.__views.__alloyId292 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId292"
    });
    __alloyId291.push($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId293"
    });
    __alloyId291.push($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId294"
    });
    __alloyId291.push($.__views.__alloyId294);
    $.__views.picker.add(__alloyId291);
    $.__views.__alloyId295 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId295"
    });
    $.__views.scrollView.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId296"
    });
    $.__views.__alloyId295.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId297"
    });
    $.__views.__alloyId295.add($.__views.__alloyId297);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId298 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId298"
    });
    $.__views.contentView2.add($.__views.__alloyId298);
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
    var __alloyId299 = [];
    $.__views.__alloyId300 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId300"
    });
    __alloyId299.push($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId301"
    });
    __alloyId299.push($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId302"
    });
    __alloyId299.push($.__views.__alloyId302);
    $.__views.picker.add(__alloyId299);
    $.__views.__alloyId303 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId303"
    });
    $.__views.scrollView.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId304"
    });
    $.__views.__alloyId303.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId305"
    });
    $.__views.__alloyId303.add($.__views.__alloyId305);
    $.__views.__alloyId306 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId306"
    });
    $.__views.scrollView.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId307"
    });
    $.__views.__alloyId306.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId308"
    });
    $.__views.__alloyId306.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId309"
    });
    $.__views.scrollView.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId310"
    });
    $.__views.__alloyId309.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId311"
    });
    $.__views.__alloyId309.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId312"
    });
    $.__views.hopOn2.add($.__views.__alloyId312);
    proceed ? $.__views.__alloyId312.addEventListener("click", proceed) : __defers["$.__views.__alloyId312!click!proceed"] = true;
    $.__views.__alloyId313 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId313"
    });
    $.__views.__alloyId312.add($.__views.__alloyId313);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    __defers["$.__views.__alloyId285!click!back"] && $.__views.__alloyId285.addEventListener("click", back);
    __defers["$.__views.__alloyId312!click!proceed"] && $.__views.__alloyId312.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;