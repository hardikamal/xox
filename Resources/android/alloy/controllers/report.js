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
        DRAWER.navigation("myAccount", 2);
    }
    function subjectType(e) {
        console.log("subjectType");
        subjectType = e.row.title;
    }
    function send() {
        console.log("send");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "report";
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
    $.__views.report = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "report"
    });
    $.__views.report && $.addTopLevelView($.__views.report);
    $.__views.__alloyId1344 = Alloy.createController("_header", {
        id: "__alloyId1344",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId1344.setParent($.__views.report);
    $.__views.__alloyId1345 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1345"
    });
    $.__views.report.add($.__views.__alloyId1345);
    $.__views.__alloyId1346 = Ti.UI.createLabel({
        text: "Report Case",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1346"
    });
    $.__views.__alloyId1345.add($.__views.__alloyId1346);
    $.__views.__alloyId1347 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1347"
    });
    $.__views.__alloyId1345.add($.__views.__alloyId1347);
    back ? $.__views.__alloyId1347.addEventListener("click", back) : __defers["$.__views.__alloyId1347!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F2F2F2"
    });
    $.__views.report.add($.__views.scrollView);
    $.__views.__alloyId1348 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1348"
    });
    $.__views.scrollView.add($.__views.__alloyId1348);
    $.__views.__alloyId1349 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1349"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1349);
    $.__views.__alloyId1350 = Ti.UI.createLabel({
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1350"
    });
    $.__views.__alloyId1349.add($.__views.__alloyId1350);
    $.__views.__alloyId1351 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId1351"
    });
    $.__views.__alloyId1349.add($.__views.__alloyId1351);
    $.__views.__alloyId1352 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId1352"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1352);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        top: "10",
        selectionIndicator: "true",
        borderRadius: "5",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1352.add($.__views.picker);
    var __alloyId1353 = [];
    $.__views.__alloyId1354 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId1354"
    });
    __alloyId1353.push($.__views.__alloyId1354);
    $.__views.__alloyId1355 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId1355"
    });
    __alloyId1353.push($.__views.__alloyId1355);
    $.__views.__alloyId1356 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId1356"
    });
    __alloyId1353.push($.__views.__alloyId1356);
    $.__views.picker.add(__alloyId1353);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId1357 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1357"
    });
    $.__views.__alloyId1352.add($.__views.__alloyId1357);
    $.__views.__alloyId1358 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1358"
    });
    $.__views.scrollView.add($.__views.__alloyId1358);
    $.__views.__alloyId1359 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1359"
    });
    $.__views.__alloyId1358.add($.__views.__alloyId1359);
    $.__views.__alloyId1360 = Ti.UI.createLabel({
        text: "Email Address",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1360"
    });
    $.__views.__alloyId1359.add($.__views.__alloyId1360);
    $.__views.__alloyId1361 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId1361"
    });
    $.__views.__alloyId1359.add($.__views.__alloyId1361);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId1358.add($.__views.email);
    $.__views.__alloyId1362 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1362"
    });
    $.__views.scrollView.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1363"
    });
    $.__views.__alloyId1362.add($.__views.__alloyId1363);
    $.__views.__alloyId1364 = Ti.UI.createLabel({
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1364"
    });
    $.__views.__alloyId1363.add($.__views.__alloyId1364);
    $.__views.__alloyId1365 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId1365"
    });
    $.__views.__alloyId1363.add($.__views.__alloyId1365);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId1362.add($.__views.mobileNo);
    $.__views.__alloyId1366 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1366"
    });
    $.__views.scrollView.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createLabel({
        text: "Message",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1367"
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1367);
    $.__views.__alloyId1368 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId1368"
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1368);
    $.__views.message = Ti.UI.createTextArea({
        id: "message",
        height: "250",
        width: "90%",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.scrollView.add($.__views.message);
    $.__views.__alloyId1369 = Ti.UI.createLabel({
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
        id: "__alloyId1369"
    });
    $.__views.scrollView.add($.__views.__alloyId1369);
    $.__views.__alloyId1370 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1370"
    });
    $.__views.report.add($.__views.__alloyId1370);
    send ? $.__views.__alloyId1370.addEventListener("click", send) : __defers["$.__views.__alloyId1370!click!send"] = true;
    $.__views.__alloyId1371 = Ti.UI.createLabel({
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
        id: "__alloyId1371"
    });
    $.__views.__alloyId1370.add($.__views.__alloyId1371);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    var subjectType;
    __defers["$.__views.__alloyId1347!click!back"] && $.__views.__alloyId1347.addEventListener("click", back);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId1370!click!send"] && $.__views.__alloyId1370.addEventListener("click", send);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;