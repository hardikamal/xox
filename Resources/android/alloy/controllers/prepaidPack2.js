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
    function salutation(e) {
        console.log("salutationType");
        salutationType = e.row.title;
    }
    function regType(e) {
        console.log("operatorType");
        regType = e.row.title;
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
    $.__views.__alloyId2085 = Alloy.createController("_header", {
        id: "__alloyId2085",
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId2085.setParent($.__views.prepaidPack2);
    $.__views.__alloyId2086 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2086"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2087"
    });
    $.__views.__alloyId2086.add($.__views.__alloyId2087);
    $.__views.__alloyId2088 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2088"
    });
    $.__views.__alloyId2086.add($.__views.__alloyId2088);
    back ? $.__views.__alloyId2088.addEventListener("click", back) : __defers["$.__views.__alloyId2088!click!back"] = true;
    $.__views.__alloyId2089 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2089"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId2089);
    $.__views.__alloyId2090 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2090"
    });
    $.__views.__alloyId2089.add($.__views.__alloyId2090);
    $.__views.__alloyId2091 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId2091"
    });
    $.__views.__alloyId2089.add($.__views.__alloyId2091);
    $.__views.__alloyId2092 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId2092"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId2092);
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
    $.__views.__alloyId2092.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId2092.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack2.add($.__views.scrollView);
    $.__views.__alloyId2093 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId2093"
    });
    $.__views.scrollView.add($.__views.__alloyId2093);
    $.__views.__alloyId2094 = Ti.UI.createLabel({
        text: "Salutation",
        textAlign: "left",
        width: "100%",
        color: "black",
        id: "__alloyId2094"
    });
    $.__views.__alloyId2093.add($.__views.__alloyId2094);
    $.__views.__alloyId2095 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId2095"
    });
    $.__views.__alloyId2093.add($.__views.__alloyId2095);
    $.__views.__alloyId2096 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId2096"
    });
    $.__views.__alloyId2095.add($.__views.__alloyId2096);
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
    $.__views.__alloyId2096.add($.__views.picker);
    var __alloyId2097 = [];
    $.__views.__alloyId2098 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId2098"
    });
    __alloyId2097.push($.__views.__alloyId2098);
    $.__views.__alloyId2099 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId2099"
    });
    __alloyId2097.push($.__views.__alloyId2099);
    $.__views.__alloyId2100 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId2100"
    });
    __alloyId2097.push($.__views.__alloyId2100);
    $.__views.picker.add(__alloyId2097);
    salutation ? $.__views.picker.addEventListener("change", salutation) : __defers["$.__views.picker!change!salutation"] = true;
    $.__views.__alloyId2101 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId2101"
    });
    $.__views.__alloyId2096.add($.__views.__alloyId2101);
    $.__views.__alloyId2102 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId2102"
    });
    $.__views.scrollView.add($.__views.__alloyId2102);
    $.__views.__alloyId2103 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId2103"
    });
    $.__views.__alloyId2102.add($.__views.__alloyId2103);
    $.__views.__alloyId2104 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId2104"
    });
    $.__views.__alloyId2102.add($.__views.__alloyId2104);
    $.__views.__alloyId2105 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId2105"
    });
    $.__views.scrollView.add($.__views.__alloyId2105);
    $.__views.__alloyId2106 = Ti.UI.createLabel({
        text: "Reg Type",
        textAlign: "left",
        width: "100%",
        color: "black",
        id: "__alloyId2106"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2106);
    $.__views.__alloyId2107 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId2107"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2107);
    $.__views.__alloyId2108 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId2108"
    });
    $.__views.__alloyId2107.add($.__views.__alloyId2108);
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
    $.__views.__alloyId2108.add($.__views.picker2);
    var __alloyId2109 = [];
    $.__views.__alloyId2110 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId2110"
    });
    __alloyId2109.push($.__views.__alloyId2110);
    $.__views.__alloyId2111 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId2111"
    });
    __alloyId2109.push($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId2112"
    });
    __alloyId2109.push($.__views.__alloyId2112);
    $.__views.picker2.add(__alloyId2109);
    regType ? $.__views.picker2.addEventListener("change", regType) : __defers["$.__views.picker2!change!regType"] = true;
    $.__views.__alloyId2113 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId2113"
    });
    $.__views.__alloyId2108.add($.__views.__alloyId2113);
    $.__views.__alloyId2114 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId2114"
    });
    $.__views.scrollView.add($.__views.__alloyId2114);
    $.__views.__alloyId2115 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId2115"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId2116"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId2117"
    });
    $.__views.scrollView.add($.__views.__alloyId2117);
    $.__views.__alloyId2118 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId2118"
    });
    $.__views.__alloyId2117.add($.__views.__alloyId2118);
    $.__views.__alloyId2119 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId2119"
    });
    $.__views.__alloyId2117.add($.__views.__alloyId2119);
    $.__views.__alloyId2120 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId2120"
    });
    $.__views.scrollView.add($.__views.__alloyId2120);
    $.__views.__alloyId2121 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId2121"
    });
    $.__views.__alloyId2120.add($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId2122"
    });
    $.__views.__alloyId2120.add($.__views.__alloyId2122);
    $.__views.__alloyId2123 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2123"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId2123);
    proceed ? $.__views.__alloyId2123.addEventListener("click", proceed) : __defers["$.__views.__alloyId2123!click!proceed"] = true;
    $.__views.__alloyId2124 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId2124"
    });
    $.__views.__alloyId2123.add($.__views.__alloyId2124);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var salutationType;
    var regType;
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    __defers["$.__views.__alloyId2088!click!back"] && $.__views.__alloyId2088.addEventListener("click", back);
    __defers["$.__views.picker!change!salutation"] && $.__views.picker.addEventListener("change", salutation);
    __defers["$.__views.picker2!change!regType"] && $.__views.picker2.addEventListener("change", regType);
    __defers["$.__views.__alloyId2123!click!proceed"] && $.__views.__alloyId2123.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;