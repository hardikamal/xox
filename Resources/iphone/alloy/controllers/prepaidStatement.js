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
        DRAWER.navigation("accountDetails2", 1);
    }
    function domesticVoice() {
        Alloy.Globals.userPlan = "prepaid";
        DRAWER.navigation("domesticCallStatement", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidStatement";
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
    $.__views.prepaidStatement = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidStatement"
    });
    $.__views.prepaidStatement && $.addTopLevelView($.__views.prepaidStatement);
    $.__views.__alloyId1345 = Alloy.createController("_header", {
        id: "__alloyId1345",
        __parentSymbol: $.__views.prepaidStatement
    });
    $.__views.__alloyId1345.setParent($.__views.prepaidStatement);
    $.__views.__alloyId1346 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1346"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1346);
    $.__views.__alloyId1347 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1347"
    });
    $.__views.__alloyId1346.add($.__views.__alloyId1347);
    $.__views.__alloyId1348 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1348"
    });
    $.__views.__alloyId1346.add($.__views.__alloyId1348);
    back ? $.__views.__alloyId1348.addEventListener("click", back) : __defers["$.__views.__alloyId1348!click!back"] = true;
    $.__views.__alloyId1349 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1349"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1349);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId1349.add($.__views.contentView);
    $.__views.__alloyId1350 = Ti.UI.createLabel({
        text: "Prepaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1350"
    });
    $.__views.contentView.add($.__views.__alloyId1350);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        top: "10",
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
        width: "90%",
        top: "10",
        bottom: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
    var __alloyId1351 = [];
    $.__views.__alloyId1352 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1352"
    });
    __alloyId1351.push($.__views.__alloyId1352);
    $.__views.__alloyId1353 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1353"
    });
    __alloyId1351.push($.__views.__alloyId1353);
    $.__views.__alloyId1354 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1354"
    });
    __alloyId1351.push($.__views.__alloyId1354);
    $.__views.__alloyId1355 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1355"
    });
    __alloyId1351.push($.__views.__alloyId1355);
    $.__views.__alloyId1356 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1356"
    });
    __alloyId1351.push($.__views.__alloyId1356);
    $.__views.picker.add(__alloyId1351);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.prepaidStatement.add($.__views.scrollView);
    $.__views.__alloyId1357 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1357"
    });
    $.__views.scrollView.add($.__views.__alloyId1357);
    $.__views.__alloyId1358 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1358"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1358);
    $.__views.__alloyId1359 = Ti.UI.createLabel({
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1359"
    });
    $.__views.__alloyId1358.add($.__views.__alloyId1359);
    domesticVoice ? $.__views.__alloyId1359.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1359!click!domesticVoice"] = true;
    $.__views.__alloyId1360 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1360"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1360);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1360.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1361 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1361"
    });
    $.__views.scrollView.add($.__views.__alloyId1361);
    $.__views.__alloyId1362 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1362"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createLabel({
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1363"
    });
    $.__views.__alloyId1362.add($.__views.__alloyId1363);
    $.__views.__alloyId1364 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1364"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1364);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1364.add($.__views.arrow1);
    $.__views.__alloyId1365 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1365"
    });
    $.__views.scrollView.add($.__views.__alloyId1365);
    $.__views.__alloyId1366 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1366"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createLabel({
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1367"
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1367);
    $.__views.__alloyId1368 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1368"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1368);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1368.add($.__views.arrow2);
    $.__views.__alloyId1369 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1369"
    });
    $.__views.scrollView.add($.__views.__alloyId1369);
    $.__views.__alloyId1370 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1370"
    });
    $.__views.__alloyId1369.add($.__views.__alloyId1370);
    $.__views.__alloyId1371 = Ti.UI.createLabel({
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1371"
    });
    $.__views.__alloyId1370.add($.__views.__alloyId1371);
    $.__views.__alloyId1372 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1372"
    });
    $.__views.__alloyId1369.add($.__views.__alloyId1372);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1372.add($.__views.arrow3);
    $.__views.__alloyId1373 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1373"
    });
    $.__views.scrollView.add($.__views.__alloyId1373);
    $.__views.__alloyId1374 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1374"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1374);
    $.__views.__alloyId1375 = Ti.UI.createLabel({
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1375"
    });
    $.__views.__alloyId1374.add($.__views.__alloyId1375);
    $.__views.__alloyId1376 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1376"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1376);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1376.add($.__views.arrow4);
    $.__views.__alloyId1377 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1377"
    });
    $.__views.scrollView.add($.__views.__alloyId1377);
    $.__views.__alloyId1378 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1378"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1378);
    $.__views.__alloyId1379 = Ti.UI.createLabel({
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1379"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1379);
    $.__views.__alloyId1380 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1380"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1380);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1380.add($.__views.arrow5);
    $.__views.__alloyId1381 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1381"
    });
    $.__views.scrollView.add($.__views.__alloyId1381);
    $.__views.__alloyId1382 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1382"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createLabel({
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1383"
    });
    $.__views.__alloyId1382.add($.__views.__alloyId1383);
    $.__views.__alloyId1384 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1384"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1384);
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1384.add($.__views.arrow6);
    $.__views.__alloyId1385 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1385"
    });
    $.__views.scrollView.add($.__views.__alloyId1385);
    $.__views.__alloyId1386 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1386"
    });
    $.__views.__alloyId1385.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createLabel({
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1387"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1387);
    $.__views.__alloyId1388 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1388"
    });
    $.__views.__alloyId1385.add($.__views.__alloyId1388);
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1388.add($.__views.arrow7);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow6.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow7.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 220;
    "android" == Ti.Platform.osname && ($.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 220);
    __defers["$.__views.__alloyId1348!click!back"] && $.__views.__alloyId1348.addEventListener("click", back);
    __defers["$.__views.__alloyId1359!click!domesticVoice"] && $.__views.__alloyId1359.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;