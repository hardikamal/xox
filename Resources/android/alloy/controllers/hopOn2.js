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
    function salutationType(e) {
        console.log("salutationType");
        salutationType = e.row.title;
    }
    function regType(e) {
        console.log("simType");
        regType = e.row.title;
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
    $.__views.__alloyId573 = Alloy.createController("_header", {
        id: "__alloyId573",
        __parentSymbol: $.__views.hopOn2
    });
    $.__views.__alloyId573.setParent($.__views.hopOn2);
    $.__views.__alloyId574 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId574"
    });
    $.__views.hopOn2.add($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId575"
    });
    $.__views.__alloyId574.add($.__views.__alloyId575);
    $.__views.__alloyId576 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId576"
    });
    $.__views.__alloyId574.add($.__views.__alloyId576);
    back ? $.__views.__alloyId576.addEventListener("click", back) : __defers["$.__views.__alloyId576!click!back"] = true;
    $.__views.__alloyId577 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId577"
    });
    $.__views.hopOn2.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createLabel({
        text: "Step 2 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId578"
    });
    $.__views.__alloyId577.add($.__views.__alloyId578);
    $.__views.__alloyId579 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId579"
    });
    $.__views.__alloyId577.add($.__views.__alloyId579);
    $.__views.__alloyId580 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId580"
    });
    $.__views.hopOn2.add($.__views.__alloyId580);
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
    $.__views.__alloyId580.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId580.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn2.add($.__views.scrollView);
    $.__views.__alloyId581 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId581"
    });
    $.__views.scrollView.add($.__views.__alloyId581);
    $.__views.__alloyId582 = Ti.UI.createLabel({
        text: "Salutation",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId582"
    });
    $.__views.__alloyId581.add($.__views.__alloyId582);
    $.__views.__alloyId583 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId583"
    });
    $.__views.__alloyId581.add($.__views.__alloyId583);
    $.__views.__alloyId584 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId584"
    });
    $.__views.__alloyId583.add($.__views.__alloyId584);
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
    $.__views.__alloyId584.add($.__views.picker);
    var __alloyId585 = [];
    $.__views.__alloyId586 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId586"
    });
    __alloyId585.push($.__views.__alloyId586);
    $.__views.__alloyId587 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId587"
    });
    __alloyId585.push($.__views.__alloyId587);
    $.__views.__alloyId588 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId588"
    });
    __alloyId585.push($.__views.__alloyId588);
    $.__views.picker.add(__alloyId585);
    salutationType ? $.__views.picker.addEventListener("change", salutationType) : __defers["$.__views.picker!change!salutationType"] = true;
    $.__views.__alloyId589 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId589"
    });
    $.__views.__alloyId584.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId590"
    });
    $.__views.scrollView.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId591"
    });
    $.__views.__alloyId590.add($.__views.__alloyId591);
    $.__views.__alloyId592 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId592"
    });
    $.__views.__alloyId590.add($.__views.__alloyId592);
    $.__views.__alloyId593 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId593"
    });
    $.__views.scrollView.add($.__views.__alloyId593);
    $.__views.__alloyId594 = Ti.UI.createLabel({
        text: "Reg Type",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId594"
    });
    $.__views.__alloyId593.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId595"
    });
    $.__views.__alloyId593.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId596"
    });
    $.__views.__alloyId595.add($.__views.__alloyId596);
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
    $.__views.__alloyId596.add($.__views.picker2);
    var __alloyId597 = [];
    $.__views.__alloyId598 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId598"
    });
    __alloyId597.push($.__views.__alloyId598);
    $.__views.__alloyId599 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId599"
    });
    __alloyId597.push($.__views.__alloyId599);
    $.__views.__alloyId600 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId600"
    });
    __alloyId597.push($.__views.__alloyId600);
    $.__views.picker2.add(__alloyId597);
    regType ? $.__views.picker2.addEventListener("change", regType) : __defers["$.__views.picker2!change!regType"] = true;
    $.__views.__alloyId601 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId601"
    });
    $.__views.__alloyId596.add($.__views.__alloyId601);
    $.__views.__alloyId602 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId602"
    });
    $.__views.scrollView.add($.__views.__alloyId602);
    $.__views.__alloyId603 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId603"
    });
    $.__views.__alloyId602.add($.__views.__alloyId603);
    $.__views.__alloyId604 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId604"
    });
    $.__views.__alloyId602.add($.__views.__alloyId604);
    $.__views.__alloyId605 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId605"
    });
    $.__views.scrollView.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
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
        bottom: "5",
        id: "__alloyId608"
    });
    $.__views.scrollView.add($.__views.__alloyId608);
    $.__views.__alloyId609 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId609"
    });
    $.__views.__alloyId608.add($.__views.__alloyId609);
    $.__views.__alloyId610 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId610"
    });
    $.__views.__alloyId608.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId611"
    });
    $.__views.hopOn2.add($.__views.__alloyId611);
    proceed ? $.__views.__alloyId611.addEventListener("click", proceed) : __defers["$.__views.__alloyId611!click!proceed"] = true;
    $.__views.__alloyId612 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId612"
    });
    $.__views.__alloyId611.add($.__views.__alloyId612);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var regType;
    var salutationType;
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    __defers["$.__views.__alloyId576!click!back"] && $.__views.__alloyId576.addEventListener("click", back);
    __defers["$.__views.picker!change!salutationType"] && $.__views.picker.addEventListener("change", salutationType);
    __defers["$.__views.picker2!change!regType"] && $.__views.picker2.addEventListener("change", regType);
    __defers["$.__views.__alloyId611!click!proceed"] && $.__views.__alloyId611.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;