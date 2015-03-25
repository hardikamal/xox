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
        DRAWER.navigation("onlinePurchases", 1);
    }
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
    }
    function highSpeed(e) {
        console.log("e.value: " + e.value);
    }
    function next() {
        DRAWER.navigation("prepaidPack2", 1);
        console.log("next");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack";
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
    $.__views.prepaidPack = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack"
    });
    $.__views.prepaidPack && $.addTopLevelView($.__views.prepaidPack);
    $.__views.__alloyId2033 = Alloy.createController("_header", {
        id: "__alloyId2033",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId2033.setParent($.__views.prepaidPack);
    $.__views.__alloyId2034 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2034"
    });
    $.__views.prepaidPack.add($.__views.__alloyId2034);
    $.__views.__alloyId2035 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2035"
    });
    $.__views.__alloyId2034.add($.__views.__alloyId2035);
    $.__views.__alloyId2036 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2036"
    });
    $.__views.__alloyId2034.add($.__views.__alloyId2036);
    back ? $.__views.__alloyId2036.addEventListener("click", back) : __defers["$.__views.__alloyId2036!click!back"] = true;
    $.__views.__alloyId2037 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2037"
    });
    $.__views.prepaidPack.add($.__views.__alloyId2037);
    $.__views.__alloyId2038 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2038"
    });
    $.__views.__alloyId2037.add($.__views.__alloyId2038);
    $.__views.__alloyId2039 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId2039"
    });
    $.__views.__alloyId2037.add($.__views.__alloyId2039);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.__alloyId2040 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId2040"
    });
    $.__views.scrollView.add($.__views.__alloyId2040);
    $.__views.__alloyId2041 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId2041"
    });
    $.__views.__alloyId2040.add($.__views.__alloyId2041);
    $.__views.__alloyId2042 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId2042"
    });
    $.__views.__alloyId2040.add($.__views.__alloyId2042);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2042.add($.__views.picker);
    var __alloyId2043 = [];
    $.__views.__alloyId2044 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId2044"
    });
    __alloyId2043.push($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId2045"
    });
    __alloyId2043.push($.__views.__alloyId2045);
    $.__views.__alloyId2046 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId2046"
    });
    __alloyId2043.push($.__views.__alloyId2046);
    $.__views.picker.add(__alloyId2043);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId2047 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2047"
    });
    $.__views.__alloyId2042.add($.__views.__alloyId2047);
    $.__views.__alloyId2048 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2048"
    });
    $.__views.scrollView.add($.__views.__alloyId2048);
    $.__views.__alloyId2049 = Ti.UI.createLabel({
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
        id: "__alloyId2049"
    });
    $.__views.__alloyId2048.add($.__views.__alloyId2049);
    $.__views.__alloyId2050 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId2050"
    });
    $.__views.__alloyId2048.add($.__views.__alloyId2050);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId2050.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId2051 = Ti.UI.createLabel({
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
        id: "__alloyId2051"
    });
    $.__views.__alloyId2050.add($.__views.__alloyId2051);
    $.__views.__alloyId2052 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId2052"
    });
    $.__views.scrollView.add($.__views.__alloyId2052);
    $.__views.__alloyId2053 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId2053"
    });
    $.__views.__alloyId2052.add($.__views.__alloyId2053);
    $.__views.__alloyId2054 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2054"
    });
    $.__views.__alloyId2052.add($.__views.__alloyId2054);
    $.__views.__alloyId2055 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId2055"
    });
    $.__views.__alloyId2054.add($.__views.__alloyId2055);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId2055.add($.__views.switch2);
    $.__views.__alloyId2056 = Ti.UI.createLabel({
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId2056"
    });
    $.__views.__alloyId2055.add($.__views.__alloyId2056);
    $.__views.__alloyId2057 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId2057"
    });
    $.__views.__alloyId2054.add($.__views.__alloyId2057);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId2057.add($.__views.switch3);
    $.__views.__alloyId2058 = Ti.UI.createLabel({
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId2058"
    });
    $.__views.__alloyId2057.add($.__views.__alloyId2058);
    $.__views.__alloyId2059 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2059"
    });
    $.__views.__alloyId2052.add($.__views.__alloyId2059);
    $.__views.__alloyId2060 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId2060"
    });
    $.__views.__alloyId2059.add($.__views.__alloyId2060);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId2060.add($.__views.switch4);
    $.__views.__alloyId2061 = Ti.UI.createLabel({
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId2061"
    });
    $.__views.__alloyId2060.add($.__views.__alloyId2061);
    $.__views.__alloyId2062 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId2062"
    });
    $.__views.__alloyId2059.add($.__views.__alloyId2062);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId2062.add($.__views.switch5);
    $.__views.__alloyId2063 = Ti.UI.createLabel({
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId2063"
    });
    $.__views.__alloyId2062.add($.__views.__alloyId2063);
    $.__views.__alloyId2064 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId2064"
    });
    $.__views.scrollView.add($.__views.__alloyId2064);
    $.__views.__alloyId2065 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId2065"
    });
    $.__views.__alloyId2064.add($.__views.__alloyId2065);
    $.__views.__alloyId2066 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId2066"
    });
    $.__views.__alloyId2064.add($.__views.__alloyId2066);
    $.__views.__alloyId2067 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2067"
    });
    $.__views.scrollView.add($.__views.__alloyId2067);
    $.__views.__alloyId2068 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId2068"
    });
    $.__views.__alloyId2067.add($.__views.__alloyId2068);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId2068.add($.__views.switch6);
    $.__views.__alloyId2069 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2069"
    });
    $.__views.__alloyId2068.add($.__views.__alloyId2069);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId2068.add($.__views.switch7);
    $.__views.__alloyId2070 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2070"
    });
    $.__views.__alloyId2068.add($.__views.__alloyId2070);
    $.__views.__alloyId2071 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2071"
    });
    $.__views.scrollView.add($.__views.__alloyId2071);
    $.__views.__alloyId2072 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId2072"
    });
    $.__views.__alloyId2071.add($.__views.__alloyId2072);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId2072.add($.__views.switch8);
    $.__views.__alloyId2073 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2073"
    });
    $.__views.__alloyId2072.add($.__views.__alloyId2073);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId2072.add($.__views.switch9);
    $.__views.__alloyId2074 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2074"
    });
    $.__views.__alloyId2072.add($.__views.__alloyId2074);
    $.__views.__alloyId2075 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2075"
    });
    $.__views.scrollView.add($.__views.__alloyId2075);
    $.__views.__alloyId2076 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId2076"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2076);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId2076.add($.__views.switch10);
    $.__views.__alloyId2077 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2077"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2077);
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
    $.__views.__alloyId2076.add($.__views.switch11);
    $.__views.__alloyId2078 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2078"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2078);
    $.__views.__alloyId2079 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2079"
    });
    $.__views.scrollView.add($.__views.__alloyId2079);
    $.__views.__alloyId2080 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId2080"
    });
    $.__views.__alloyId2079.add($.__views.__alloyId2080);
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
    $.__views.__alloyId2080.add($.__views.switch12);
    $.__views.__alloyId2081 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2081"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2081);
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
    $.__views.__alloyId2080.add($.__views.switch13);
    $.__views.__alloyId2082 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId2082"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2083"
    });
    $.__views.prepaidPack.add($.__views.__alloyId2083);
    next ? $.__views.__alloyId2083.addEventListener("click", next) : __defers["$.__views.__alloyId2083!click!next"] = true;
    $.__views.__alloyId2084 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId2084"
    });
    $.__views.__alloyId2083.add($.__views.__alloyId2084);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch3.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch4.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch5.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch6.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch7.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch8.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch9.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch10.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch11.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch12.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch13.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.picker.setSelectedRow(0, 0, false);
    var simType;
    __defers["$.__views.__alloyId2036!click!back"] && $.__views.__alloyId2036.addEventListener("click", back);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId2083!click!next"] && $.__views.__alloyId2083.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;