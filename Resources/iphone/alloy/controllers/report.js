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
    $.__views.__alloyId2293 = Alloy.createController("_header", {
        id: "__alloyId2293",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId2293.setParent($.__views.report);
    $.__views.__alloyId2294 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2294"
    });
    $.__views.report.add($.__views.__alloyId2294);
    $.__views.__alloyId2295 = Ti.UI.createLabel({
        color: "white",
        backgroundColor: "transparent",
        font: {
            fontSize: "18dp"
        },
        text: "Feedback",
        left: "20",
        id: "__alloyId2295"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2295);
    $.__views.__alloyId2296 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2296"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2296);
    back ? $.__views.__alloyId2296.addEventListener("click", back) : __defers["$.__views.__alloyId2296!click!back"] = true;
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
    $.__views.__alloyId2297 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2297"
    });
    $.__views.contentView.add($.__views.__alloyId2297);
    $.__views.__alloyId2298 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Subject",
        height: "50",
        textAlign: "left",
        id: "__alloyId2298"
    });
    $.__views.__alloyId2297.add($.__views.__alloyId2298);
    $.__views.__alloyId2299 = Ti.UI.createLabel({
        color: "red",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "*",
        height: "50",
        textAlign: "left",
        id: "__alloyId2299"
    });
    $.__views.__alloyId2297.add($.__views.__alloyId2299);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "100%",
        width: "65%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.subjectLabel = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "#FCFCFC",
        font: {
            fontSize: "14dp"
        },
        text: "Select an option",
        id: "subjectLabel",
        height: "30",
        width: "99%",
        borderRadius: "5",
        borderColor: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.subjectLabel);
    showPicker ? $.__views.subjectLabel.addEventListener("click", showPicker) : __defers["$.__views.subjectLabel!click!showPicker"] = true;
    $.__views.__alloyId2300 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2300"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2300);
    showPicker ? $.__views.__alloyId2300.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2300!click!showPicker"] = true;
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
    var __alloyId2301 = [];
    $.__views.__alloyId2302 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId2302"
    });
    __alloyId2301.push($.__views.__alloyId2302);
    $.__views.__alloyId2303 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId2303"
    });
    __alloyId2301.push($.__views.__alloyId2303);
    $.__views.__alloyId2304 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId2304"
    });
    __alloyId2301.push($.__views.__alloyId2304);
    $.__views.picker.add(__alloyId2301);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId2305 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2305"
    });
    $.__views.scrollView.add($.__views.__alloyId2305);
    $.__views.__alloyId2306 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2306"
    });
    $.__views.__alloyId2305.add($.__views.__alloyId2306);
    $.__views.__alloyId2307 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Email",
        height: "50",
        textAlign: "left",
        id: "__alloyId2307"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2307);
    $.__views.__alloyId2308 = Ti.UI.createLabel({
        color: "red",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "*",
        height: "50",
        textAlign: "left",
        id: "__alloyId2308"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2308);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId2305.add($.__views.email);
    $.__views.__alloyId2309 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2309"
    });
    $.__views.scrollView.add($.__views.__alloyId2309);
    $.__views.__alloyId2310 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2310"
    });
    $.__views.__alloyId2309.add($.__views.__alloyId2310);
    $.__views.__alloyId2311 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Mobile No.",
        height: "50",
        textAlign: "left",
        id: "__alloyId2311"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2311);
    $.__views.__alloyId2312 = Ti.UI.createLabel({
        color: "red",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "*",
        height: "50",
        textAlign: "left",
        id: "__alloyId2312"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2312);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId2309.add($.__views.mobileNo);
    $.__views.__alloyId2313 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2313"
    });
    $.__views.scrollView.add($.__views.__alloyId2313);
    $.__views.__alloyId2314 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Message",
        height: "50",
        textAlign: "left",
        id: "__alloyId2314"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2314);
    $.__views.__alloyId2315 = Ti.UI.createLabel({
        color: "red",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "*",
        height: "50",
        textAlign: "left",
        id: "__alloyId2315"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2315);
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
    $.__views.__alloyId2316 = Ti.UI.createLabel({
        color: "red",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "* Required fields",
        height: "50",
        textAlign: "left",
        left: "10%",
        top: "10",
        id: "__alloyId2316"
    });
    $.__views.scrollView.add($.__views.__alloyId2316);
    $.__views.__alloyId2317 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2317"
    });
    $.__views.report.add($.__views.__alloyId2317);
    send ? $.__views.__alloyId2317.addEventListener("click", send) : __defers["$.__views.__alloyId2317!click!send"] = true;
    $.__views.__alloyId2318 = Ti.UI.createLabel({
        color: "white",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Send",
        height: "100%",
        textAlign: "center",
        id: "__alloyId2318"
    });
    $.__views.__alloyId2317.add($.__views.__alloyId2318);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    var subjectType;
    __defers["$.__views.__alloyId2296!click!back"] && $.__views.__alloyId2296.addEventListener("click", back);
    __defers["$.__views.subjectLabel!click!showPicker"] && $.__views.subjectLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2300!click!showPicker"] && $.__views.__alloyId2300.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId2317!click!send"] && $.__views.__alloyId2317.addEventListener("click", send);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;