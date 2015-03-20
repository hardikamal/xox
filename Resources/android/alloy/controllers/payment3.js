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
    function paymentType(e) {
        console.log("paymentType");
        paymentType = e.row.title;
    }
    function paymentType2(e) {
        console.log("paymentType");
        paymentType2 = e.row.title;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment3";
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
    $.__views.payment3 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment3"
    });
    $.__views.payment3 && $.addTopLevelView($.__views.payment3);
    $.__views.__alloyId1267 = Alloy.createController("_header", {
        id: "__alloyId1267",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1267.setParent($.__views.payment3);
    $.__views.__alloyId1268 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1268"
    });
    $.__views.payment3.add($.__views.__alloyId1268);
    $.__views.__alloyId1269 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1269"
    });
    $.__views.__alloyId1268.add($.__views.__alloyId1269);
    $.__views.__alloyId1270 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1270"
    });
    $.__views.__alloyId1268.add($.__views.__alloyId1270);
    back ? $.__views.__alloyId1270.addEventListener("click", back) : __defers["$.__views.__alloyId1270!click!back"] = true;
    $.__views.__alloyId1271 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1271"
    });
    $.__views.payment3.add($.__views.__alloyId1271);
    $.__views.__alloyId1272 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1272"
    });
    $.__views.__alloyId1271.add($.__views.__alloyId1272);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId1273 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1273"
    });
    $.__views.scrollView.add($.__views.__alloyId1273);
    $.__views.__alloyId1274 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1274"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1274);
    $.__views.__alloyId1275 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1275"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1275);
    $.__views.__alloyId1276 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1276"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1276);
    $.__views.__alloyId1277 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1277"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1277);
    $.__views.__alloyId1278 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1278"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1278);
    $.__views.__alloyId1279 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1279"
    });
    $.__views.scrollView.add($.__views.__alloyId1279);
    $.__views.__alloyId1280 = Ti.UI.createLabel({
        text: "Top Up Amount",
        textAlign: "center",
        color: "black",
        id: "__alloyId1280"
    });
    $.__views.__alloyId1279.add($.__views.__alloyId1280);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1279.add($.__views.picker2);
    var __alloyId1281 = [];
    $.__views.__alloyId1282 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId1282"
    });
    __alloyId1281.push($.__views.__alloyId1282);
    $.__views.__alloyId1283 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1283"
    });
    __alloyId1281.push($.__views.__alloyId1283);
    $.__views.__alloyId1284 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1284"
    });
    __alloyId1281.push($.__views.__alloyId1284);
    $.__views.__alloyId1285 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1285"
    });
    __alloyId1281.push($.__views.__alloyId1285);
    $.__views.__alloyId1286 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1286"
    });
    __alloyId1281.push($.__views.__alloyId1286);
    $.__views.picker2.add(__alloyId1281);
    paymentType2 ? $.__views.picker2.addEventListener("change", paymentType2) : __defers["$.__views.picker2!change!paymentType2"] = true;
    $.__views.__alloyId1287 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1287"
    });
    $.__views.__alloyId1279.add($.__views.__alloyId1287);
    $.__views.__alloyId1288 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1288"
    });
    $.__views.scrollView.add($.__views.__alloyId1288);
    $.__views.__alloyId1289 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1289"
    });
    $.__views.__alloyId1288.add($.__views.__alloyId1289);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1288.add($.__views.picker);
    var __alloyId1290 = [];
    $.__views.__alloyId1291 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1291"
    });
    __alloyId1290.push($.__views.__alloyId1291);
    $.__views.__alloyId1292 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1292"
    });
    __alloyId1290.push($.__views.__alloyId1292);
    $.__views.__alloyId1293 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1293"
    });
    __alloyId1290.push($.__views.__alloyId1293);
    $.__views.picker.add(__alloyId1290);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1294 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1294"
    });
    $.__views.__alloyId1288.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1295"
    });
    $.__views.payment3.add($.__views.__alloyId1295);
    proceed ? $.__views.__alloyId1295.addEventListener("click", proceed) : __defers["$.__views.__alloyId1295!click!proceed"] = true;
    $.__views.__alloyId1296 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1296"
    });
    $.__views.__alloyId1295.add($.__views.__alloyId1296);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var paymentType;
    __defers["$.__views.__alloyId1270!click!back"] && $.__views.__alloyId1270.addEventListener("click", back);
    __defers["$.__views.picker2!change!paymentType2"] && $.__views.picker2.addEventListener("change", paymentType2);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1295!click!proceed"] && $.__views.__alloyId1295.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;