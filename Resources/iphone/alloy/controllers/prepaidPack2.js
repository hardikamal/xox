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
        DRAWER.navigation("prepaidPack", 1);
    }
    function proceed() {
        DRAWER.navigation("prepaidPack3", 1);
        console.log("proceed");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack2";
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
    $.__views.prepaidPack2 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack2"
    });
    $.__views.prepaidPack2 && $.addTopLevelView($.__views.prepaidPack2);
    $.__views.__alloyId2025 = Alloy.createController("_header", {
        id: "__alloyId2025",
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId2025.setParent($.__views.prepaidPack2);
    $.__views.__alloyId2026 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2026"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId2026);
    $.__views.__alloyId2027 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2027"
    });
    $.__views.__alloyId2026.add($.__views.__alloyId2027);
    $.__views.__alloyId2028 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2028"
    });
    $.__views.__alloyId2026.add($.__views.__alloyId2028);
    back ? $.__views.__alloyId2028.addEventListener("click", back) : __defers["$.__views.__alloyId2028!click!back"] = true;
    $.__views.__alloyId2029 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2029"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId2029);
    $.__views.__alloyId2030 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2030"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2030);
    $.__views.__alloyId2031 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId2031"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2031);
    $.__views.__alloyId2032 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId2032"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId2032);
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
    $.__views.__alloyId2032.add($.__views.prepaid_subtitle);
    $.__views.prepaid_mandatory = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "*Please fill in the Mandatory field",
        id: "prepaid_mandatory",
        backgroundColor: "transparent",
        color: "red",
        width: "50%",
        top: "5"
    });
    $.__views.__alloyId2032.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack2.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId2033 = Ti.UI.createLabel({
        text: "Salutation",
        textAlign: "left",
        width: "100%",
        color: "black",
        id: "__alloyId2033"
    });
    $.__views.contentView.add($.__views.__alloyId2033);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        top: "10",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.salutationLabel = Ti.UI.createLabel({
        id: "salutationLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.salutationLabel);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        bottom: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
    var __alloyId2034 = [];
    $.__views.__alloyId2035 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId2035"
    });
    __alloyId2034.push($.__views.__alloyId2035);
    $.__views.__alloyId2036 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId2036"
    });
    __alloyId2034.push($.__views.__alloyId2036);
    $.__views.__alloyId2037 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId2037"
    });
    __alloyId2034.push($.__views.__alloyId2037);
    $.__views.picker.add(__alloyId2034);
    $.__views.__alloyId2038 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId2038"
    });
    $.__views.scrollView.add($.__views.__alloyId2038);
    $.__views.__alloyId2039 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId2039"
    });
    $.__views.__alloyId2038.add($.__views.__alloyId2039);
    $.__views.__alloyId2040 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId2040"
    });
    $.__views.__alloyId2038.add($.__views.__alloyId2040);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId2041 = Ti.UI.createLabel({
        text: "Reg Type",
        textAlign: "left",
        width: "100%",
        color: "black",
        id: "__alloyId2041"
    });
    $.__views.contentView2.add($.__views.__alloyId2041);
    $.__views.pickerContentView2 = Ti.UI.createView({
        id: "pickerContentView2",
        layout: "composite",
        top: "10",
        width: "70%"
    });
    $.__views.contentView2.add($.__views.pickerContentView2);
    $.__views.regTypeLabel = Ti.UI.createLabel({
        id: "regTypeLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView2.add($.__views.regTypeLabel);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        bottom: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView2.add($.__views.picker2);
    var __alloyId2042 = [];
    $.__views.__alloyId2043 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId2043"
    });
    __alloyId2042.push($.__views.__alloyId2043);
    $.__views.__alloyId2044 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId2044"
    });
    __alloyId2042.push($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId2045"
    });
    __alloyId2042.push($.__views.__alloyId2045);
    $.__views.picker2.add(__alloyId2042);
    $.__views.__alloyId2046 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId2046"
    });
    $.__views.scrollView.add($.__views.__alloyId2046);
    $.__views.__alloyId2047 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId2047"
    });
    $.__views.__alloyId2046.add($.__views.__alloyId2047);
    $.__views.__alloyId2048 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId2048"
    });
    $.__views.__alloyId2046.add($.__views.__alloyId2048);
    $.__views.__alloyId2049 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId2049"
    });
    $.__views.scrollView.add($.__views.__alloyId2049);
    $.__views.__alloyId2050 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId2050"
    });
    $.__views.__alloyId2049.add($.__views.__alloyId2050);
    $.__views.__alloyId2051 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId2051"
    });
    $.__views.__alloyId2049.add($.__views.__alloyId2051);
    $.__views.__alloyId2052 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId2052"
    });
    $.__views.scrollView.add($.__views.__alloyId2052);
    $.__views.__alloyId2053 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId2053"
    });
    $.__views.__alloyId2052.add($.__views.__alloyId2053);
    $.__views.__alloyId2054 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId2054"
    });
    $.__views.__alloyId2052.add($.__views.__alloyId2054);
    $.__views.__alloyId2055 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2055"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId2055);
    proceed ? $.__views.__alloyId2055.addEventListener("click", proceed) : __defers["$.__views.__alloyId2055!click!proceed"] = true;
    $.__views.__alloyId2056 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId2056"
    });
    $.__views.__alloyId2055.add($.__views.__alloyId2056);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId2028!click!back"] && $.__views.__alloyId2028.addEventListener("click", back);
    __defers["$.__views.__alloyId2055!click!proceed"] && $.__views.__alloyId2055.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;