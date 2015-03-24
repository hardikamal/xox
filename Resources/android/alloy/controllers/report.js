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
    $.__views.__alloyId2110 = Alloy.createController("_header", {
        id: "__alloyId2110",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId2110.setParent($.__views.report);
    $.__views.__alloyId2111 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2111"
    });
    $.__views.report.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createLabel({
        text: "Report Case",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2112"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2113"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2113);
    back ? $.__views.__alloyId2113.addEventListener("click", back) : __defers["$.__views.__alloyId2113!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F2F2F2"
    });
    $.__views.report.add($.__views.scrollView);
    $.__views.__alloyId2114 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2114"
    });
    $.__views.scrollView.add($.__views.__alloyId2114);
    $.__views.__alloyId2115 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2115"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createLabel({
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2116"
    });
    $.__views.__alloyId2115.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2117"
    });
    $.__views.__alloyId2115.add($.__views.__alloyId2117);
    $.__views.__alloyId2118 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "65%",
        id: "__alloyId2118"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2118);
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
    $.__views.__alloyId2118.add($.__views.picker);
    var __alloyId2119 = [];
    $.__views.__alloyId2120 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId2120"
    });
    __alloyId2119.push($.__views.__alloyId2120);
    $.__views.__alloyId2121 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId2121"
    });
    __alloyId2119.push($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId2122"
    });
    __alloyId2119.push($.__views.__alloyId2122);
    $.__views.picker.add(__alloyId2119);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId2123 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2123"
    });
    $.__views.__alloyId2118.add($.__views.__alloyId2123);
    $.__views.__alloyId2124 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2124"
    });
    $.__views.scrollView.add($.__views.__alloyId2124);
    $.__views.__alloyId2125 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2125"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2125);
    $.__views.__alloyId2126 = Ti.UI.createLabel({
        text: "Email",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2126"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2126);
    $.__views.__alloyId2127 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2127"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2127);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId2124.add($.__views.email);
    $.__views.__alloyId2128 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2128"
    });
    $.__views.scrollView.add($.__views.__alloyId2128);
    $.__views.__alloyId2129 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2129"
    });
    $.__views.__alloyId2128.add($.__views.__alloyId2129);
    $.__views.__alloyId2130 = Ti.UI.createLabel({
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2130"
    });
    $.__views.__alloyId2129.add($.__views.__alloyId2130);
    $.__views.__alloyId2131 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2131"
    });
    $.__views.__alloyId2129.add($.__views.__alloyId2131);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId2128.add($.__views.mobileNo);
    $.__views.__alloyId2132 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2132"
    });
    $.__views.scrollView.add($.__views.__alloyId2132);
    $.__views.__alloyId2133 = Ti.UI.createLabel({
        text: "Message",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2133"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2133);
    $.__views.__alloyId2134 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2134"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2134);
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
    $.__views.__alloyId2135 = Ti.UI.createLabel({
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
        id: "__alloyId2135"
    });
    $.__views.scrollView.add($.__views.__alloyId2135);
    $.__views.__alloyId2136 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2136"
    });
    $.__views.report.add($.__views.__alloyId2136);
    send ? $.__views.__alloyId2136.addEventListener("click", send) : __defers["$.__views.__alloyId2136!click!send"] = true;
    $.__views.__alloyId2137 = Ti.UI.createLabel({
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
        id: "__alloyId2137"
    });
    $.__views.__alloyId2136.add($.__views.__alloyId2137);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    var subjectType;
    __defers["$.__views.__alloyId2113!click!back"] && $.__views.__alloyId2113.addEventListener("click", back);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId2136!click!send"] && $.__views.__alloyId2136.addEventListener("click", send);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;