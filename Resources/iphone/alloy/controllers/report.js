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
    $.__views.__alloyId971 = Alloy.createController("_header", {
        id: "__alloyId971",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId971.setParent($.__views.report);
    $.__views.__alloyId972 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId972"
    });
    $.__views.report.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createLabel({
        text: "Report Case",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId973"
    });
    $.__views.__alloyId972.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId974"
    });
    $.__views.__alloyId972.add($.__views.__alloyId974);
    back ? $.__views.__alloyId974.addEventListener("click", back) : __defers["$.__views.__alloyId974!click!back"] = true;
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
    $.__views.__alloyId975 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId975"
    });
    $.__views.contentView.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createLabel({
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId976"
    });
    $.__views.__alloyId975.add($.__views.__alloyId976);
    $.__views.__alloyId977 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId977"
    });
    $.__views.__alloyId975.add($.__views.__alloyId977);
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
    $.__views.__alloyId978 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId978"
    });
    $.__views.pickerContentView.add($.__views.__alloyId978);
    showPicker ? $.__views.__alloyId978.addEventListener("click", showPicker) : __defers["$.__views.__alloyId978!click!showPicker"] = true;
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
    var __alloyId979 = [];
    $.__views.__alloyId980 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId980"
    });
    __alloyId979.push($.__views.__alloyId980);
    $.__views.__alloyId981 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId981"
    });
    __alloyId979.push($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId982"
    });
    __alloyId979.push($.__views.__alloyId982);
    $.__views.picker.add(__alloyId979);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId983 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId983"
    });
    $.__views.scrollView.add($.__views.__alloyId983);
    $.__views.__alloyId984 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId984"
    });
    $.__views.__alloyId983.add($.__views.__alloyId984);
    $.__views.__alloyId985 = Ti.UI.createLabel({
        text: "Email Address",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId985"
    });
    $.__views.__alloyId984.add($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId986"
    });
    $.__views.__alloyId984.add($.__views.__alloyId986);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId983.add($.__views.email);
    $.__views.__alloyId987 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId987"
    });
    $.__views.scrollView.add($.__views.__alloyId987);
    $.__views.__alloyId988 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId988"
    });
    $.__views.__alloyId987.add($.__views.__alloyId988);
    $.__views.__alloyId989 = Ti.UI.createLabel({
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId989"
    });
    $.__views.__alloyId988.add($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId990"
    });
    $.__views.__alloyId988.add($.__views.__alloyId990);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "70%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId987.add($.__views.mobileNo);
    $.__views.__alloyId991 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId991"
    });
    $.__views.scrollView.add($.__views.__alloyId991);
    $.__views.__alloyId992 = Ti.UI.createLabel({
        text: "Message",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId992"
    });
    $.__views.__alloyId991.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId993"
    });
    $.__views.__alloyId991.add($.__views.__alloyId993);
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
    $.__views.__alloyId994 = Ti.UI.createLabel({
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
        id: "__alloyId994"
    });
    $.__views.scrollView.add($.__views.__alloyId994);
    $.__views.__alloyId995 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId995"
    });
    $.__views.report.add($.__views.__alloyId995);
    send ? $.__views.__alloyId995.addEventListener("click", send) : __defers["$.__views.__alloyId995!click!send"] = true;
    $.__views.__alloyId996 = Ti.UI.createLabel({
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
        id: "__alloyId996"
    });
    $.__views.__alloyId995.add($.__views.__alloyId996);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    var subjectType;
    __defers["$.__views.__alloyId974!click!back"] && $.__views.__alloyId974.addEventListener("click", back);
    __defers["$.__views.subjectLabel!click!showPicker"] && $.__views.subjectLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId978!click!showPicker"] && $.__views.__alloyId978.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId995!click!send"] && $.__views.__alloyId995.addEventListener("click", send);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;