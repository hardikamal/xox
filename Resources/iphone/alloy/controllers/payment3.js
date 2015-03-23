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
<<<<<<< HEAD
        DRAWER.navigation("myAccount", 1);
=======
<<<<<<< HEAD
        DRAWER.navigation("myAccount", 1);
=======
        DRAWER.navigation("payment", 1);
>>>>>>> origin/master
>>>>>>> origin/master
    }
    function proceed() {
        DRAWER.navigation("payment4", 1);
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
<<<<<<< HEAD
    $.__views.__alloyId1261 = Alloy.createController("_header", {
        id: "__alloyId1261",
=======
<<<<<<< HEAD
    $.__views.__alloyId1426 = Alloy.createController("_header", {
        id: "__alloyId1426",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1426.setParent($.__views.payment3);
    $.__views.__alloyId1427 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1427"
    });
    $.__views.payment3.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createLabel({
=======
    $.__views.__alloyId929 = Alloy.createController("_header", {
        id: "__alloyId929",
>>>>>>> origin/master
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1261.setParent($.__views.payment3);
    $.__views.__alloyId1262 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1262"
    });
<<<<<<< HEAD
    $.__views.payment3.add($.__views.__alloyId1262);
    $.__views.__alloyId1263 = Ti.UI.createLabel({
=======
    $.__views.payment3.add($.__views.__alloyId930);
    $.__views.__alloyId931 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1263"
    });
    $.__views.__alloyId1262.add($.__views.__alloyId1263);
    $.__views.__alloyId1264 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1428"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1428);
    $.__views.__alloyId1429 = Ti.UI.createImageView({
=======
        id: "__alloyId931"
    });
    $.__views.__alloyId930.add($.__views.__alloyId931);
    $.__views.__alloyId932 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1264"
=======
<<<<<<< HEAD
        id: "__alloyId1429"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1429);
    back ? $.__views.__alloyId1429.addEventListener("click", back) : __defers["$.__views.__alloyId1429!click!back"] = true;
    $.__views.__alloyId1430 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1430"
    });
    $.__views.payment3.add($.__views.__alloyId1430);
    $.__views.__alloyId1431 = Ti.UI.createLabel({
=======
        id: "__alloyId932"
>>>>>>> origin/master
    });
    $.__views.__alloyId1262.add($.__views.__alloyId1264);
    back ? $.__views.__alloyId1264.addEventListener("click", back) : __defers["$.__views.__alloyId1264!click!back"] = true;
    $.__views.__alloyId1265 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1265"
    });
<<<<<<< HEAD
    $.__views.payment3.add($.__views.__alloyId1265);
    $.__views.__alloyId1266 = Ti.UI.createLabel({
=======
    $.__views.payment3.add($.__views.__alloyId933);
    $.__views.__alloyId934 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1266"
    });
    $.__views.__alloyId1265.add($.__views.__alloyId1266);
=======
<<<<<<< HEAD
        id: "__alloyId1431"
    });
    $.__views.__alloyId1430.add($.__views.__alloyId1431);
=======
        id: "__alloyId934"
    });
    $.__views.__alloyId933.add($.__views.__alloyId934);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1267 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1432 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1432"
    });
    $.__views.scrollView.add($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createLabel({
=======
    $.__views.__alloyId935 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1267"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1267);
    $.__views.__alloyId1268 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId935);
    $.__views.__alloyId936 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1268"
=======
<<<<<<< HEAD
        id: "__alloyId1433"
    });
    $.__views.__alloyId1432.add($.__views.__alloyId1433);
    $.__views.__alloyId1434 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1434"
    });
    $.__views.__alloyId1432.add($.__views.__alloyId1434);
    $.__views.__alloyId1435 = Ti.UI.createLabel({
=======
        id: "__alloyId936"
>>>>>>> origin/master
    });
    $.__views.__alloyId1267.add($.__views.__alloyId1268);
    $.__views.__alloyId1269 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1269"
    });
<<<<<<< HEAD
    $.__views.__alloyId1267.add($.__views.__alloyId1269);
    $.__views.__alloyId1270 = Ti.UI.createLabel({
=======
    $.__views.__alloyId935.add($.__views.__alloyId937);
    $.__views.__alloyId938 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1270"
=======
<<<<<<< HEAD
        id: "__alloyId1435"
    });
    $.__views.__alloyId1432.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1436"
    });
    $.__views.__alloyId1432.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createView({
=======
        id: "__alloyId938"
>>>>>>> origin/master
    });
    $.__views.__alloyId1267.add($.__views.__alloyId1270);
    $.__views.__alloyId1271 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1271"
    });
<<<<<<< HEAD
    $.__views.__alloyId1267.add($.__views.__alloyId1271);
    $.__views.__alloyId1272 = Ti.UI.createView({
=======
    $.__views.__alloyId935.add($.__views.__alloyId939);
    $.__views.__alloyId940 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId1272"
    });
    $.__views.__alloyId1267.add($.__views.__alloyId1272);
=======
<<<<<<< HEAD
        id: "__alloyId1437"
    });
    $.__views.__alloyId1432.add($.__views.__alloyId1437);
=======
        id: "__alloyId940"
    });
    $.__views.__alloyId935.add($.__views.__alloyId940);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView2);
<<<<<<< HEAD
    $.__views.__alloyId1273 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1438 = Ti.UI.createLabel({
        text: "Top Up Amount",
        textAlign: "center",
        color: "black",
        id: "__alloyId1438"
    });
    $.__views.contentView2.add($.__views.__alloyId1438);
=======
    $.__views.__alloyId941 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top Up Amount",
        textAlign: "center",
        color: "black",
        id: "__alloyId1273"
    });
<<<<<<< HEAD
    $.__views.contentView2.add($.__views.__alloyId1273);
=======
    $.__views.contentView2.add($.__views.__alloyId941);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.pickerContentView2 = Ti.UI.createView({
        id: "pickerContentView2",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView2.add($.__views.pickerContentView2);
    $.__views.paymentLabel2 = Ti.UI.createLabel({
        id: "paymentLabel2",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView2.add($.__views.paymentLabel2);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView2.add($.__views.picker2);
<<<<<<< HEAD
    var __alloyId1274 = [];
    $.__views.__alloyId1275 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId1439 = [];
    $.__views.__alloyId1440 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId1440"
    });
    __alloyId1439.push($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1441"
    });
    __alloyId1439.push($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1442"
    });
    __alloyId1439.push($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1443"
    });
    __alloyId1439.push($.__views.__alloyId1443);
    $.__views.__alloyId1444 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1444"
    });
    __alloyId1439.push($.__views.__alloyId1444);
    $.__views.picker2.add(__alloyId1439);
=======
    var __alloyId942 = [];
    $.__views.__alloyId943 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "Amount",
        id: "__alloyId1275"
    });
    __alloyId1274.push($.__views.__alloyId1275);
    $.__views.__alloyId1276 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1276"
    });
    __alloyId1274.push($.__views.__alloyId1276);
    $.__views.__alloyId1277 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1277"
    });
    __alloyId1274.push($.__views.__alloyId1277);
    $.__views.__alloyId1278 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1278"
    });
    __alloyId1274.push($.__views.__alloyId1278);
    $.__views.__alloyId1279 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1279"
    });
<<<<<<< HEAD
    __alloyId1274.push($.__views.__alloyId1279);
    $.__views.picker2.add(__alloyId1274);
=======
    __alloyId942.push($.__views.__alloyId947);
    $.__views.picker2.add(__alloyId942);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
<<<<<<< HEAD
    $.__views.__alloyId1280 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1445 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1445"
    });
    $.__views.contentView.add($.__views.__alloyId1445);
=======
    $.__views.__alloyId948 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1280"
    });
<<<<<<< HEAD
    $.__views.contentView.add($.__views.__alloyId1280);
=======
    $.__views.contentView.add($.__views.__alloyId948);
>>>>>>> origin/master
>>>>>>> origin/master
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
<<<<<<< HEAD
    var __alloyId1281 = [];
    $.__views.__alloyId1282 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId1446 = [];
    $.__views.__alloyId1447 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1447"
    });
    __alloyId1446.push($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1448"
    });
    __alloyId1446.push($.__views.__alloyId1448);
    $.__views.__alloyId1449 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1449"
    });
    __alloyId1446.push($.__views.__alloyId1449);
    $.__views.picker.add(__alloyId1446);
    $.__views.__alloyId1450 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1450"
    });
    $.__views.payment3.add($.__views.__alloyId1450);
    proceed ? $.__views.__alloyId1450.addEventListener("click", proceed) : __defers["$.__views.__alloyId1450!click!proceed"] = true;
    $.__views.__alloyId1451 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1451"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1451);
=======
    var __alloyId949 = [];
    $.__views.__alloyId950 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "Online Banking",
        id: "__alloyId1282"
    });
    __alloyId1281.push($.__views.__alloyId1282);
    $.__views.__alloyId1283 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1283"
    });
    __alloyId1281.push($.__views.__alloyId1283);
    $.__views.__alloyId1284 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1284"
    });
    __alloyId1281.push($.__views.__alloyId1284);
    $.__views.picker.add(__alloyId1281);
    $.__views.__alloyId1285 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1285"
    });
    $.__views.payment3.add($.__views.__alloyId1285);
    proceed ? $.__views.__alloyId1285.addEventListener("click", proceed) : __defers["$.__views.__alloyId1285!click!proceed"] = true;
    $.__views.__alloyId1286 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1286"
    });
<<<<<<< HEAD
    $.__views.__alloyId1285.add($.__views.__alloyId1286);
=======
    $.__views.__alloyId953.add($.__views.__alloyId954);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1264!click!back"] && $.__views.__alloyId1264.addEventListener("click", back);
    __defers["$.__views.__alloyId1285!click!proceed"] && $.__views.__alloyId1285.addEventListener("click", proceed);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1429!click!back"] && $.__views.__alloyId1429.addEventListener("click", back);
    __defers["$.__views.__alloyId1450!click!proceed"] && $.__views.__alloyId1450.addEventListener("click", proceed);
=======
    __defers["$.__views.__alloyId932!click!back"] && $.__views.__alloyId932.addEventListener("click", back);
    __defers["$.__views.__alloyId953!click!proceed"] && $.__views.__alloyId953.addEventListener("click", proceed);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;