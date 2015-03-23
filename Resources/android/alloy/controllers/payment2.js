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
        DRAWER.navigation("payment", 1);
=======
        DRAWER.navigation("myAccount", 1);
>>>>>>> origin/master
    }
    function proceed() {
        DRAWER.navigation("payment4", 1);
    }
    function paymentType(e) {
        console.log("paymentType");
        paymentType = e.row.title;
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
<<<<<<< HEAD
    $.__views.__alloyId1415 = Alloy.createController("_header", {
        id: "__alloyId1415",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId1415.setParent($.__views.payment2);
    $.__views.__alloyId1416 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1416"
    });
    $.__views.payment2.add($.__views.__alloyId1416);
    $.__views.__alloyId1417 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1244 = Alloy.createController("_header", {
        id: "__alloyId1244",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId1244.setParent($.__views.payment2);
    $.__views.__alloyId1245 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1245"
    });
    $.__views.payment2.add($.__views.__alloyId1245);
    $.__views.__alloyId1246 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1417"
    });
    $.__views.__alloyId1416.add($.__views.__alloyId1417);
    $.__views.__alloyId1418 = Ti.UI.createImageView({
=======
        id: "__alloyId1246"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1246);
    $.__views.__alloyId1247 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1418"
    });
    $.__views.__alloyId1416.add($.__views.__alloyId1418);
    back ? $.__views.__alloyId1418.addEventListener("click", back) : __defers["$.__views.__alloyId1418!click!back"] = true;
    $.__views.__alloyId1419 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1419"
    });
    $.__views.payment2.add($.__views.__alloyId1419);
    $.__views.__alloyId1420 = Ti.UI.createLabel({
=======
        id: "__alloyId1247"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1247);
    back ? $.__views.__alloyId1247.addEventListener("click", back) : __defers["$.__views.__alloyId1247!click!back"] = true;
    $.__views.__alloyId1248 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1248"
    });
    $.__views.payment2.add($.__views.__alloyId1248);
    $.__views.__alloyId1249 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1420"
    });
    $.__views.__alloyId1419.add($.__views.__alloyId1420);
=======
        id: "__alloyId1249"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1249);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment2.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1421 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1421"
    });
    $.__views.scrollView.add($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1250 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1250"
    });
    $.__views.scrollView.add($.__views.__alloyId1250);
    $.__views.__alloyId1251 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1422"
    });
    $.__views.__alloyId1421.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1423"
    });
    $.__views.__alloyId1421.add($.__views.__alloyId1423);
    $.__views.__alloyId1424 = Ti.UI.createLabel({
=======
        id: "__alloyId1251"
    });
    $.__views.__alloyId1250.add($.__views.__alloyId1251);
    $.__views.__alloyId1252 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1252"
    });
    $.__views.__alloyId1250.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1424"
    });
    $.__views.__alloyId1421.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1425"
    });
    $.__views.__alloyId1421.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createView({
=======
        id: "__alloyId1253"
    });
    $.__views.__alloyId1250.add($.__views.__alloyId1253);
    $.__views.__alloyId1254 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1254"
    });
    $.__views.__alloyId1250.add($.__views.__alloyId1254);
    $.__views.__alloyId1255 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId1426"
    });
    $.__views.__alloyId1421.add($.__views.__alloyId1426);
=======
        id: "__alloyId1255"
    });
    $.__views.__alloyId1250.add($.__views.__alloyId1255);
>>>>>>> origin/master
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
<<<<<<< HEAD
    $.__views.__alloyId1427 = Ti.UI.createLabel({
        text: "Bill Payment Amount (RM)",
        color: "black",
        id: "__alloyId1427"
    });
    $.__views.contentView2.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createTextField({
=======
    $.__views.__alloyId1256 = Ti.UI.createLabel({
        text: "Bill Payment Amount (RM)",
        color: "black",
        id: "__alloyId1256"
    });
    $.__views.contentView2.add($.__views.__alloyId1256);
    $.__views.__alloyId1257 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId1428"
    });
    $.__views.contentView2.add($.__views.__alloyId1428);
    $.__views.__alloyId1429 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1429"
    });
    $.__views.scrollView.add($.__views.__alloyId1429);
    $.__views.__alloyId1430 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1430"
    });
    $.__views.__alloyId1429.add($.__views.__alloyId1430);
=======
        id: "__alloyId1257"
    });
    $.__views.contentView2.add($.__views.__alloyId1257);
    $.__views.__alloyId1258 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1258"
    });
    $.__views.scrollView.add($.__views.__alloyId1258);
    $.__views.__alloyId1259 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1259"
    });
    $.__views.__alloyId1258.add($.__views.__alloyId1259);
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
    $.__views.__alloyId1429.add($.__views.picker);
    var __alloyId1431 = [];
    $.__views.__alloyId1432 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1432"
    });
    __alloyId1431.push($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1433"
    });
    __alloyId1431.push($.__views.__alloyId1433);
    $.__views.__alloyId1434 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1434"
    });
    __alloyId1431.push($.__views.__alloyId1434);
    $.__views.picker.add(__alloyId1431);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1435 = Ti.UI.createImageView({
=======
    $.__views.__alloyId1258.add($.__views.picker);
    var __alloyId1260 = [];
    $.__views.__alloyId1261 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1261"
    });
    __alloyId1260.push($.__views.__alloyId1261);
    $.__views.__alloyId1262 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1262"
    });
    __alloyId1260.push($.__views.__alloyId1262);
    $.__views.__alloyId1263 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1263"
    });
    __alloyId1260.push($.__views.__alloyId1263);
    $.__views.picker.add(__alloyId1260);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1264 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId1435"
    });
    $.__views.__alloyId1429.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1436"
    });
    $.__views.payment2.add($.__views.__alloyId1436);
    proceed ? $.__views.__alloyId1436.addEventListener("click", proceed) : __defers["$.__views.__alloyId1436!click!proceed"] = true;
    $.__views.__alloyId1437 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1437"
    });
    $.__views.__alloyId1436.add($.__views.__alloyId1437);
=======
        id: "__alloyId1264"
    });
    $.__views.__alloyId1258.add($.__views.__alloyId1264);
    $.__views.__alloyId1265 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1265"
    });
    $.__views.payment2.add($.__views.__alloyId1265);
    proceed ? $.__views.__alloyId1265.addEventListener("click", proceed) : __defers["$.__views.__alloyId1265!click!proceed"] = true;
    $.__views.__alloyId1266 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1266"
    });
    $.__views.__alloyId1265.add($.__views.__alloyId1266);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var paymentType;
<<<<<<< HEAD
    __defers["$.__views.__alloyId1418!click!back"] && $.__views.__alloyId1418.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1436!click!proceed"] && $.__views.__alloyId1436.addEventListener("click", proceed);
=======
    __defers["$.__views.__alloyId1247!click!back"] && $.__views.__alloyId1247.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1265!click!proceed"] && $.__views.__alloyId1265.addEventListener("click", proceed);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;