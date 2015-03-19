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
    function showPicker() {
        console.log("showPicker");
        if ("false" == $.pickerView.visible) {
            $.contentView.height = 250;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            $.contentView.height = 250;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function subjectType(e) {
        console.log("subjectType");
        subjectType = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.subjectLabel.text = subjectType);
    }
    function done() {
        console.log("done");
        $.contentView.height = 50;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
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
    $.__views.__alloyId1329 = Alloy.createController("_header", {
        id: "__alloyId1329",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId1329.setParent($.__views.report);
    $.__views.__alloyId1330 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1330"
    });
    $.__views.report.add($.__views.__alloyId1330);
    $.__views.__alloyId1331 = Ti.UI.createLabel({
        text: "Report Case",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1331"
    });
    $.__views.__alloyId1330.add($.__views.__alloyId1331);
    $.__views.__alloyId1332 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1332"
    });
    $.__views.__alloyId1330.add($.__views.__alloyId1332);
    back ? $.__views.__alloyId1332.addEventListener("click", back) : __defers["$.__views.__alloyId1332!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F2F2F2"
    });
    $.__views.report.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        width: "90%"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1333 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1333"
    });
    $.__views.contentView.add($.__views.__alloyId1333);
    $.__views.__alloyId1334 = Ti.UI.createLabel({
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1334"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1334);
    $.__views.__alloyId1335 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId1335"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1335);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "100%",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.subjectLabel = Ti.UI.createLabel({
        text: "Select an option",
        id: "subjectLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "5",
        borderColor: "gray",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.subjectLabel);
    showPicker ? $.__views.subjectLabel.addEventListener("click", showPicker) : __defers["$.__views.subjectLabel!click!showPicker"] = true;
    $.__views.__alloyId1336 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1336"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1336);
    showPicker ? $.__views.__alloyId1336.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1336!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50"
    });
    $.__views.pickerContentView.add($.__views.pickerView);
    $.__views.done = Ti.UI.createButton({
        title: "Done",
        id: "done",
        height: "30",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        top: "0",
        left: "0",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.done);
    done ? $.__views.done.addEventListener("click", done) : __defers["$.__views.done!click!done"] = true;
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "30",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.picker);
    var __alloyId1337 = [];
    $.__views.__alloyId1338 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId1338"
    });
    __alloyId1337.push($.__views.__alloyId1338);
    $.__views.__alloyId1339 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId1339"
    });
    __alloyId1337.push($.__views.__alloyId1339);
    $.__views.__alloyId1340 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId1340"
    });
    __alloyId1337.push($.__views.__alloyId1340);
    $.__views.picker.add(__alloyId1337);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId1341 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1341"
    });
    $.__views.scrollView.add($.__views.__alloyId1341);
    $.__views.__alloyId1342 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1342"
    });
    $.__views.__alloyId1341.add($.__views.__alloyId1342);
    $.__views.__alloyId1343 = Ti.UI.createLabel({
        text: "Email Address",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1343"
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1343);
    $.__views.__alloyId1344 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId1344"
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1344);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId1341.add($.__views.email);
    $.__views.__alloyId1345 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1345"
    });
    $.__views.scrollView.add($.__views.__alloyId1345);
    $.__views.__alloyId1346 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1346"
    });
    $.__views.__alloyId1345.add($.__views.__alloyId1346);
    $.__views.__alloyId1347 = Ti.UI.createLabel({
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1347"
    });
    $.__views.__alloyId1346.add($.__views.__alloyId1347);
    $.__views.__alloyId1348 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId1348"
    });
    $.__views.__alloyId1346.add($.__views.__alloyId1348);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId1345.add($.__views.mobileNo);
    $.__views.__alloyId1349 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1349"
    });
    $.__views.scrollView.add($.__views.__alloyId1349);
    $.__views.__alloyId1350 = Ti.UI.createLabel({
        text: "Message",
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
    $.__views.__alloyId1352 = Ti.UI.createLabel({
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
        id: "__alloyId1352"
    });
    $.__views.scrollView.add($.__views.__alloyId1352);
    $.__views.__alloyId1353 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1353"
    });
    $.__views.report.add($.__views.__alloyId1353);
    send ? $.__views.__alloyId1353.addEventListener("click", send) : __defers["$.__views.__alloyId1353!click!send"] = true;
    $.__views.__alloyId1354 = Ti.UI.createLabel({
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
        id: "__alloyId1354"
    });
    $.__views.__alloyId1353.add($.__views.__alloyId1354);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    var subjectType;
    __defers["$.__views.__alloyId1332!click!back"] && $.__views.__alloyId1332.addEventListener("click", back);
    __defers["$.__views.subjectLabel!click!showPicker"] && $.__views.subjectLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1336!click!showPicker"] && $.__views.__alloyId1336.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId1353!click!send"] && $.__views.__alloyId1353.addEventListener("click", send);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;