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
<<<<<<< Updated upstream
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
=======
        DRAWER.navigation("payment2", 2);
    }
    function done() {
        DRAWER.navigation("myAccount", 2);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    $.__views.payment3 = Ti.UI.createScrollView({
=======
    $.__views.payment3 = Ti.UI.createView({
>>>>>>> Stashed changes
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment3"
    });
    $.__views.payment3 && $.addTopLevelView($.__views.payment3);
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1438 = Alloy.createController("_header", {
        id: "__alloyId1438",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1438.setParent($.__views.payment3);
    $.__views.__alloyId1439 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1439"
    });
    $.__views.payment3.add($.__views.__alloyId1439);
    $.__views.__alloyId1440 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
=======
    $.__views.__alloyId423 = Alloy.createController("_header", {
        id: "__alloyId423",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId423.setParent($.__views.payment3);
    $.__views.__alloyId424 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId424"
    });
    $.__views.payment3.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1440"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createImageView({
=======
        id: "__alloyId1269"
    });
    $.__views.__alloyId1268.add($.__views.__alloyId1269);
    $.__views.__alloyId1270 = Ti.UI.createImageView({
>>>>>>> origin/master
=======
        id: "__alloyId425"
    });
    $.__views.__alloyId424.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1441"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1441);
    back ? $.__views.__alloyId1441.addEventListener("click", back) : __defers["$.__views.__alloyId1441!click!back"] = true;
    $.__views.__alloyId1442 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1442"
    });
    $.__views.payment3.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1443"
    });
    $.__views.__alloyId1442.add($.__views.__alloyId1443);
=======
        id: "__alloyId1272"
    });
    $.__views.__alloyId1271.add($.__views.__alloyId1272);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1444 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1444"
    });
    $.__views.scrollView.add($.__views.__alloyId1444);
    $.__views.__alloyId1445 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1273 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1273"
    });
    $.__views.scrollView.add($.__views.__alloyId1273);
    $.__views.__alloyId1274 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1445"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1446"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1447"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1448"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1448);
    $.__views.__alloyId1449 = Ti.UI.createView({
=======
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
>>>>>>> origin/master
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId1449"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1449);
    $.__views.__alloyId1450 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1450"
    });
    $.__views.scrollView.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createLabel({
        text: "Top Up Amount",
        textAlign: "center",
        color: "black",
        id: "__alloyId1451"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1451);
=======
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
>>>>>>> origin/master
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
<<<<<<< HEAD
    $.__views.__alloyId1450.add($.__views.picker2);
    var __alloyId1452 = [];
    $.__views.__alloyId1453 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId1453"
    });
    __alloyId1452.push($.__views.__alloyId1453);
    $.__views.__alloyId1454 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1454"
    });
    __alloyId1452.push($.__views.__alloyId1454);
    $.__views.__alloyId1455 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1455"
    });
    __alloyId1452.push($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1456"
    });
    __alloyId1452.push($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1457"
    });
    __alloyId1452.push($.__views.__alloyId1457);
    $.__views.picker2.add(__alloyId1452);
    paymentType2 ? $.__views.picker2.addEventListener("change", paymentType2) : __defers["$.__views.picker2!change!paymentType2"] = true;
    $.__views.__alloyId1458 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId1458"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1458);
    $.__views.__alloyId1459 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1459"
    });
    $.__views.scrollView.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1460"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1460);
=======
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
>>>>>>> origin/master
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
<<<<<<< HEAD
    $.__views.__alloyId1459.add($.__views.picker);
    var __alloyId1461 = [];
    $.__views.__alloyId1462 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1462"
    });
    __alloyId1461.push($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1463"
    });
    __alloyId1461.push($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1464"
    });
    __alloyId1461.push($.__views.__alloyId1464);
    $.__views.picker.add(__alloyId1461);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1465 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId1465"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1466"
    });
    $.__views.payment3.add($.__views.__alloyId1466);
    proceed ? $.__views.__alloyId1466.addEventListener("click", proceed) : __defers["$.__views.__alloyId1466!click!proceed"] = true;
    $.__views.__alloyId1467 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1467"
    });
    $.__views.__alloyId1466.add($.__views.__alloyId1467);
=======
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
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var paymentType;
<<<<<<< HEAD
    __defers["$.__views.__alloyId1441!click!back"] && $.__views.__alloyId1441.addEventListener("click", back);
    __defers["$.__views.picker2!change!paymentType2"] && $.__views.picker2.addEventListener("change", paymentType2);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1466!click!proceed"] && $.__views.__alloyId1466.addEventListener("click", proceed);
=======
    __defers["$.__views.__alloyId1270!click!back"] && $.__views.__alloyId1270.addEventListener("click", back);
    __defers["$.__views.picker2!change!paymentType2"] && $.__views.picker2.addEventListener("change", paymentType2);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1295!click!proceed"] && $.__views.__alloyId1295.addEventListener("click", proceed);
>>>>>>> origin/master
=======
        id: "__alloyId426"
    });
    $.__views.__alloyId424.add($.__views.__alloyId426);
    back ? $.__views.__alloyId426.addEventListener("click", back) : __defers["$.__views.__alloyId426!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId427 = Ti.UI.createLabel({
        text: "Payment Confirmation",
        color: "black",
        top: "20",
        id: "__alloyId427"
    });
    $.__views.scrollView.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        top: "10",
        bottom: "10",
        id: "__alloyId428"
    });
    $.__views.scrollView.add($.__views.__alloyId428);
    $.__views.account = Ti.UI.createLabel({
        text: "Account No.: 011 xxxxxxx",
        id: "account",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.account);
    $.__views.amount = Ti.UI.createLabel({
        id: "amount",
        text: "left",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.amount);
    $.__views.method = Ti.UI.createLabel({
        id: "method",
        text: "left",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.method);
    $.__views.__alloyId429 = Ti.UI.createButton({
        title: "Done",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
        id: "__alloyId429"
    });
    $.__views.scrollView.add($.__views.__alloyId429);
    done ? $.__views.__alloyId429.addEventListener("click", done) : __defers["$.__views.__alloyId429!click!done"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.amount.text = "Amount (RM): RM" + Ti.App.Properties.getString("amount");
    $.method.text = "Payment Method: " + Ti.App.Properties.getString("method");
    __defers["$.__views.__alloyId426!click!back"] && $.__views.__alloyId426.addEventListener("click", back);
    __defers["$.__views.__alloyId429!click!done"] && $.__views.__alloyId429.addEventListener("click", done);
>>>>>>> Stashed changes
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;