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
        DRAWER.navigation("myAccount", 1);
    }
    function proceed() {
        DRAWER.navigation("payment4", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment2";
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
    $.__views.payment2 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment2"
    });
    $.__views.payment2 && $.addTopLevelView($.__views.payment2);
    $.__views.__alloyId1240 = Alloy.createController("_header", {
        id: "__alloyId1240",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId1240.setParent($.__views.payment2);
    $.__views.__alloyId1241 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1241"
    });
    $.__views.payment2.add($.__views.__alloyId1241);
    $.__views.__alloyId1242 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1242"
    });
    $.__views.__alloyId1241.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1243"
    });
    $.__views.__alloyId1241.add($.__views.__alloyId1243);
    back ? $.__views.__alloyId1243.addEventListener("click", back) : __defers["$.__views.__alloyId1243!click!back"] = true;
    $.__views.__alloyId1244 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1244"
    });
    $.__views.payment2.add($.__views.__alloyId1244);
    $.__views.__alloyId1245 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1245"
    });
    $.__views.__alloyId1244.add($.__views.__alloyId1245);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment2.add($.__views.scrollView);
    $.__views.__alloyId1246 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1246"
    });
    $.__views.scrollView.add($.__views.__alloyId1246);
    $.__views.__alloyId1247 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1247"
    });
    $.__views.__alloyId1246.add($.__views.__alloyId1247);
    $.__views.__alloyId1248 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1248"
    });
    $.__views.__alloyId1246.add($.__views.__alloyId1248);
    $.__views.__alloyId1249 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1249"
    });
    $.__views.__alloyId1246.add($.__views.__alloyId1249);
    $.__views.__alloyId1250 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1250"
    });
    $.__views.__alloyId1246.add($.__views.__alloyId1250);
    $.__views.__alloyId1251 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1251"
    });
    $.__views.__alloyId1246.add($.__views.__alloyId1251);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1252 = Ti.UI.createLabel({
        text: "Bill Payment Amount (RM)",
        color: "black",
        id: "__alloyId1252"
    });
    $.__views.contentView2.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1253"
    });
    $.__views.contentView2.add($.__views.__alloyId1253);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1254 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1254"
    });
    $.__views.contentView.add($.__views.__alloyId1254);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.paymentLabel = Ti.UI.createLabel({
        id: "paymentLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.paymentLabel);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
    var __alloyId1255 = [];
    $.__views.__alloyId1256 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1256"
    });
    __alloyId1255.push($.__views.__alloyId1256);
    $.__views.__alloyId1257 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1257"
    });
    __alloyId1255.push($.__views.__alloyId1257);
    $.__views.__alloyId1258 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1258"
    });
    __alloyId1255.push($.__views.__alloyId1258);
    $.__views.picker.add(__alloyId1255);
    $.__views.__alloyId1259 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1259"
    });
    $.__views.payment2.add($.__views.__alloyId1259);
    proceed ? $.__views.__alloyId1259.addEventListener("click", proceed) : __defers["$.__views.__alloyId1259!click!proceed"] = true;
    $.__views.__alloyId1260 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1260"
    });
    $.__views.__alloyId1259.add($.__views.__alloyId1260);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1243!click!back"] && $.__views.__alloyId1243.addEventListener("click", back);
    __defers["$.__views.__alloyId1259!click!proceed"] && $.__views.__alloyId1259.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;