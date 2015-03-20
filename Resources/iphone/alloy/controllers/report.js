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
    $.__views.__alloyId1526 = Alloy.createController("_header", {
        id: "__alloyId1526",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId1526.setParent($.__views.report);
    $.__views.__alloyId1527 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1527"
    });
    $.__views.report.add($.__views.__alloyId1527);
    $.__views.__alloyId1528 = Ti.UI.createLabel({
        text: "Report Case",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1528"
    });
    $.__views.__alloyId1527.add($.__views.__alloyId1528);
    $.__views.__alloyId1529 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1529"
    });
    $.__views.__alloyId1527.add($.__views.__alloyId1529);
    back ? $.__views.__alloyId1529.addEventListener("click", back) : __defers["$.__views.__alloyId1529!click!back"] = true;
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
    $.__views.__alloyId1530 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1530"
    });
    $.__views.contentView.add($.__views.__alloyId1530);
    $.__views.__alloyId1531 = Ti.UI.createLabel({
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1531"
    });
    $.__views.__alloyId1530.add($.__views.__alloyId1531);
    $.__views.__alloyId1532 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId1532"
    });
    $.__views.__alloyId1530.add($.__views.__alloyId1532);
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
    $.__views.__alloyId1533 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1533"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1533);
    showPicker ? $.__views.__alloyId1533.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1533!click!showPicker"] = true;
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
    var __alloyId1534 = [];
    $.__views.__alloyId1535 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId1535"
    });
    __alloyId1534.push($.__views.__alloyId1535);
    $.__views.__alloyId1536 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId1536"
    });
    __alloyId1534.push($.__views.__alloyId1536);
    $.__views.__alloyId1537 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId1537"
    });
    __alloyId1534.push($.__views.__alloyId1537);
    $.__views.picker.add(__alloyId1534);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId1538 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1538"
    });
    $.__views.scrollView.add($.__views.__alloyId1538);
    $.__views.__alloyId1539 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1539"
    });
    $.__views.__alloyId1538.add($.__views.__alloyId1539);
    $.__views.__alloyId1540 = Ti.UI.createLabel({
        text: "Email Address",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1540"
    });
    $.__views.__alloyId1539.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId1541"
    });
    $.__views.__alloyId1539.add($.__views.__alloyId1541);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId1538.add($.__views.email);
    $.__views.__alloyId1542 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1542"
    });
    $.__views.scrollView.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1543"
    });
    $.__views.__alloyId1542.add($.__views.__alloyId1543);
    $.__views.__alloyId1544 = Ti.UI.createLabel({
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1544"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId1545"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1545);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId1542.add($.__views.mobileNo);
    $.__views.__alloyId1546 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId1546"
    });
    $.__views.scrollView.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createLabel({
        text: "Message",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId1547"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId1548"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1548);
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
    $.__views.__alloyId1549 = Ti.UI.createLabel({
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
        id: "__alloyId1549"
    });
    $.__views.scrollView.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1550"
    });
    $.__views.report.add($.__views.__alloyId1550);
    send ? $.__views.__alloyId1550.addEventListener("click", send) : __defers["$.__views.__alloyId1550!click!send"] = true;
    $.__views.__alloyId1551 = Ti.UI.createLabel({
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
        id: "__alloyId1551"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1551);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    var subjectType;
    __defers["$.__views.__alloyId1529!click!back"] && $.__views.__alloyId1529.addEventListener("click", back);
    __defers["$.__views.subjectLabel!click!showPicker"] && $.__views.subjectLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1533!click!showPicker"] && $.__views.__alloyId1533.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId1550!click!send"] && $.__views.__alloyId1550.addEventListener("click", send);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;