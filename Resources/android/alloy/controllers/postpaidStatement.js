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
    function paymentType(e) {
        console.log("paymentType");
        paymentType = e.row.title;
    }
    function domesticVoice() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("domesticCallStatement", 1);
    }
    function domesticVideo() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("domesticVideo", 1);
    }
    function domesticSMS() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("domesticSMS", 1);
    }
    function iddVoice() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("iddVoice", 1);
    }
    function iddVideo() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("iddVideo", 1);
    }
    function iddSMS() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("iddSMS", 1);
    }
    function roamingCalls() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("roamingCalls", 1);
    }
    function roamingSMS() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("roamingSMS", 1);
    }
    function download() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "postpaidStatement";
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
    $.__views.postpaidStatement = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "postpaidStatement"
    });
    $.__views.postpaidStatement && $.addTopLevelView($.__views.postpaidStatement);
    $.__views.__alloyId1339 = Alloy.createController("_header", {
        id: "__alloyId1339",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1339.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1340 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1340"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1340);
    $.__views.__alloyId1341 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1341"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1341);
    $.__views.__alloyId1342 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1342"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1342);
    back ? $.__views.__alloyId1342.addEventListener("click", back) : __defers["$.__views.__alloyId1342!click!back"] = true;
    $.__views.__alloyId1343 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1343"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1343);
    $.__views.__alloyId1344 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId1344"
    });
    $.__views.__alloyId1343.add($.__views.__alloyId1344);
    $.__views.__alloyId1345 = Ti.UI.createLabel({
        text: "Postpaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1345"
    });
    $.__views.__alloyId1344.add($.__views.__alloyId1345);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "90%",
        top: "10",
        bottom: "10",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1344.add($.__views.picker);
    var __alloyId1346 = [];
    $.__views.__alloyId1347 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1347"
    });
    __alloyId1346.push($.__views.__alloyId1347);
    $.__views.__alloyId1348 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1348"
    });
    __alloyId1346.push($.__views.__alloyId1348);
    $.__views.__alloyId1349 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1349"
    });
    __alloyId1346.push($.__views.__alloyId1349);
    $.__views.__alloyId1350 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1350"
    });
    __alloyId1346.push($.__views.__alloyId1350);
    $.__views.__alloyId1351 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1351"
    });
    __alloyId1346.push($.__views.__alloyId1351);
    $.__views.picker.add(__alloyId1346);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1352 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1352"
    });
    $.__views.__alloyId1344.add($.__views.__alloyId1352);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.postpaidStatement.add($.__views.scrollView);
    $.__views.__alloyId1353 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1353"
    });
    $.__views.scrollView.add($.__views.__alloyId1353);
    domesticVoice ? $.__views.__alloyId1353.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1353!click!domesticVoice"] = true;
    $.__views.__alloyId1354 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1354"
    });
    $.__views.__alloyId1353.add($.__views.__alloyId1354);
    $.__views.__alloyId1355 = Ti.UI.createLabel({
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1355"
    });
    $.__views.__alloyId1354.add($.__views.__alloyId1355);
    domesticVoice ? $.__views.__alloyId1355.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1355!click!domesticVoice"] = true;
    $.__views.__alloyId1356 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1356"
    });
    $.__views.__alloyId1353.add($.__views.__alloyId1356);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1356.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1357 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1357"
    });
    $.__views.scrollView.add($.__views.__alloyId1357);
    domesticSMS ? $.__views.__alloyId1357.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1357!click!domesticSMS"] = true;
    $.__views.__alloyId1358 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1358"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1358);
    $.__views.__alloyId1359 = Ti.UI.createLabel({
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1359"
    });
    $.__views.__alloyId1358.add($.__views.__alloyId1359);
    domesticSMS ? $.__views.__alloyId1359.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1359!click!domesticSMS"] = true;
    $.__views.__alloyId1360 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1360"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1360);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1360.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1361 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1361"
    });
    $.__views.scrollView.add($.__views.__alloyId1361);
    domesticVideo ? $.__views.__alloyId1361.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1361!click!domesticVideo"] = true;
    $.__views.__alloyId1362 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1362"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createLabel({
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1363"
    });
    $.__views.__alloyId1362.add($.__views.__alloyId1363);
    domesticVideo ? $.__views.__alloyId1363.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1363!click!domesticVideo"] = true;
    $.__views.__alloyId1364 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1364"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1364);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1364.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1365 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1365"
    });
    $.__views.scrollView.add($.__views.__alloyId1365);
    iddVoice ? $.__views.__alloyId1365.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1365!click!iddVoice"] = true;
    $.__views.__alloyId1366 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1366"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createLabel({
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1367"
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1367);
    iddVoice ? $.__views.__alloyId1367.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1367!click!iddVoice"] = true;
    $.__views.__alloyId1368 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1368"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1368);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1368.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1369 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1369"
    });
    $.__views.scrollView.add($.__views.__alloyId1369);
    iddSMS ? $.__views.__alloyId1369.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1369!click!iddSMS"] = true;
    $.__views.__alloyId1370 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1370"
    });
    $.__views.__alloyId1369.add($.__views.__alloyId1370);
    $.__views.__alloyId1371 = Ti.UI.createLabel({
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1371"
    });
    $.__views.__alloyId1370.add($.__views.__alloyId1371);
    iddSMS ? $.__views.__alloyId1371.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1371!click!iddSMS"] = true;
    $.__views.__alloyId1372 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1372"
    });
    $.__views.__alloyId1369.add($.__views.__alloyId1372);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1372.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1373 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1373"
    });
    $.__views.scrollView.add($.__views.__alloyId1373);
    iddVideo ? $.__views.__alloyId1373.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1373!click!iddVideo"] = true;
    $.__views.__alloyId1374 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1374"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1374);
    $.__views.__alloyId1375 = Ti.UI.createLabel({
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1375"
    });
    $.__views.__alloyId1374.add($.__views.__alloyId1375);
    iddVideo ? $.__views.__alloyId1375.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1375!click!iddVideo"] = true;
    $.__views.__alloyId1376 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1376"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1376);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1376.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1377 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1377"
    });
    $.__views.scrollView.add($.__views.__alloyId1377);
    roamingCalls ? $.__views.__alloyId1377.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1377!click!roamingCalls"] = true;
    $.__views.__alloyId1378 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1378"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1378);
    $.__views.__alloyId1379 = Ti.UI.createLabel({
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1379"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1379);
    roamingCalls ? $.__views.__alloyId1379.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1379!click!roamingCalls"] = true;
    $.__views.__alloyId1380 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1380"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1380);
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1380.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1381 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1381"
    });
    $.__views.scrollView.add($.__views.__alloyId1381);
    roamingSMS ? $.__views.__alloyId1381.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1381!click!roamingSMS"] = true;
    $.__views.__alloyId1382 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1382"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createLabel({
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1383"
    });
    $.__views.__alloyId1382.add($.__views.__alloyId1383);
    roamingSMS ? $.__views.__alloyId1383.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1383!click!roamingSMS"] = true;
    $.__views.__alloyId1384 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1384"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1384);
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1384.add($.__views.arrow7);
    roamingSMS ? $.__views.arrow7.addEventListener("click", roamingSMS) : __defers["$.__views.arrow7!click!roamingSMS"] = true;
    $.__views.__alloyId1385 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1385"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1385);
    download ? $.__views.__alloyId1385.addEventListener("click", download) : __defers["$.__views.__alloyId1385!click!download"] = true;
    $.__views.__alloyId1386 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1386"
    });
    $.__views.__alloyId1385.add($.__views.__alloyId1386);
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
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 270;
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 270;
    __defers["$.__views.__alloyId1342!click!back"] && $.__views.__alloyId1342.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1353!click!domesticVoice"] && $.__views.__alloyId1353.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1355!click!domesticVoice"] && $.__views.__alloyId1355.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1357!click!domesticSMS"] && $.__views.__alloyId1357.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1359!click!domesticSMS"] && $.__views.__alloyId1359.addEventListener("click", domesticSMS);
    __defers["$.__views.arrow1!click!domesticSMS"] && $.__views.arrow1.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1361!click!domesticVideo"] && $.__views.__alloyId1361.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1363!click!domesticVideo"] && $.__views.__alloyId1363.addEventListener("click", domesticVideo);
    __defers["$.__views.arrow2!click!domesticVideo"] && $.__views.arrow2.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1365!click!iddVoice"] && $.__views.__alloyId1365.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1367!click!iddVoice"] && $.__views.__alloyId1367.addEventListener("click", iddVoice);
    __defers["$.__views.arrow3!click!iddVoice"] && $.__views.arrow3.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1369!click!iddSMS"] && $.__views.__alloyId1369.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1371!click!iddSMS"] && $.__views.__alloyId1371.addEventListener("click", iddSMS);
    __defers["$.__views.arrow4!click!iddSMS"] && $.__views.arrow4.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1373!click!iddVideo"] && $.__views.__alloyId1373.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1375!click!iddVideo"] && $.__views.__alloyId1375.addEventListener("click", iddVideo);
    __defers["$.__views.arrow5!click!iddVideo"] && $.__views.arrow5.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1377!click!roamingCalls"] && $.__views.__alloyId1377.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1379!click!roamingCalls"] && $.__views.__alloyId1379.addEventListener("click", roamingCalls);
    __defers["$.__views.arrow6!click!roamingCalls"] && $.__views.arrow6.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1381!click!roamingSMS"] && $.__views.__alloyId1381.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1383!click!roamingSMS"] && $.__views.__alloyId1383.addEventListener("click", roamingSMS);
    __defers["$.__views.arrow7!click!roamingSMS"] && $.__views.arrow7.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1385!click!download"] && $.__views.__alloyId1385.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;