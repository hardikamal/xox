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
    $.__views.__alloyId2061 = Alloy.createController("_header", {
        id: "__alloyId2061",
        __parentSymbol: $.__views.report
    });
    $.__views.__alloyId2061.setParent($.__views.report);
    $.__views.__alloyId2062 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2062"
    });
    $.__views.report.add($.__views.__alloyId2062);
    $.__views.__alloyId2063 = Ti.UI.createLabel({
        text: "Report Case",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2063"
    });
    $.__views.__alloyId2062.add($.__views.__alloyId2063);
    $.__views.__alloyId2064 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2064"
    });
    $.__views.__alloyId2062.add($.__views.__alloyId2064);
    back ? $.__views.__alloyId2064.addEventListener("click", back) : __defers["$.__views.__alloyId2064!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F2F2F2"
    });
    $.__views.report.add($.__views.scrollView);
    $.__views.__alloyId2065 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2065"
    });
    $.__views.scrollView.add($.__views.__alloyId2065);
    $.__views.__alloyId2066 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2066"
    });
    $.__views.__alloyId2065.add($.__views.__alloyId2066);
    $.__views.__alloyId2067 = Ti.UI.createLabel({
        text: "Subject",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2067"
    });
    $.__views.__alloyId2066.add($.__views.__alloyId2067);
    $.__views.__alloyId2068 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2068"
    });
    $.__views.__alloyId2066.add($.__views.__alloyId2068);
    $.__views.__alloyId2069 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "65%",
        id: "__alloyId2069"
    });
    $.__views.__alloyId2065.add($.__views.__alloyId2069);
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
    $.__views.__alloyId2069.add($.__views.picker);
    var __alloyId2070 = [];
    $.__views.__alloyId2071 = Ti.UI.createPickerRow({
        title: "Subject 1",
        id: "__alloyId2071"
    });
    __alloyId2070.push($.__views.__alloyId2071);
    $.__views.__alloyId2072 = Ti.UI.createPickerRow({
        title: "Subject 2",
        id: "__alloyId2072"
    });
    __alloyId2070.push($.__views.__alloyId2072);
    $.__views.__alloyId2073 = Ti.UI.createPickerRow({
        title: "Subject 3",
        id: "__alloyId2073"
    });
    __alloyId2070.push($.__views.__alloyId2073);
    $.__views.picker.add(__alloyId2070);
    subjectType ? $.__views.picker.addEventListener("change", subjectType) : __defers["$.__views.picker!change!subjectType"] = true;
    $.__views.__alloyId2074 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2074"
    });
    $.__views.__alloyId2069.add($.__views.__alloyId2074);
    $.__views.__alloyId2075 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2075"
    });
    $.__views.scrollView.add($.__views.__alloyId2075);
    $.__views.__alloyId2076 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2076"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2076);
    $.__views.__alloyId2077 = Ti.UI.createLabel({
        text: "Email",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2077"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2077);
    $.__views.__alloyId2078 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2078"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2078);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId2075.add($.__views.email);
    $.__views.__alloyId2079 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2079"
    });
    $.__views.scrollView.add($.__views.__alloyId2079);
    $.__views.__alloyId2080 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "35%",
        top: "0",
        id: "__alloyId2080"
    });
    $.__views.__alloyId2079.add($.__views.__alloyId2080);
    $.__views.__alloyId2081 = Ti.UI.createLabel({
        text: "Mobile No.",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2081"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2081);
    $.__views.__alloyId2082 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2082"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2082);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "65%",
        height: "30",
        borderRadius: "5",
        backgroundColor: "white",
        color: "black",
        borderColor: "gray"
    });
    $.__views.__alloyId2079.add($.__views.mobileNo);
    $.__views.__alloyId2083 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "90%",
        id: "__alloyId2083"
    });
    $.__views.scrollView.add($.__views.__alloyId2083);
    $.__views.__alloyId2084 = Ti.UI.createLabel({
        text: "Message",
        height: "50",
        color: "black",
        textAlign: "left",
        id: "__alloyId2084"
    });
    $.__views.__alloyId2083.add($.__views.__alloyId2084);
    $.__views.__alloyId2085 = Ti.UI.createLabel({
        text: "*",
        height: "50",
        color: "red",
        textAlign: "left",
        id: "__alloyId2085"
    });
    $.__views.__alloyId2083.add($.__views.__alloyId2085);
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
    $.__views.__alloyId2086 = Ti.UI.createLabel({
        text: "* Required fields",
        height: "50",
        color: "red",
        textAlign: "left",
        left: "10%",
        top: "10",
        id: "__alloyId2086"
    });
    $.__views.scrollView.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2087"
    });
    $.__views.report.add($.__views.__alloyId2087);
    send ? $.__views.__alloyId2087.addEventListener("click", send) : __defers["$.__views.__alloyId2087!click!send"] = true;
    $.__views.__alloyId2088 = Ti.UI.createLabel({
        text: "Send",
        color: "white",
        height: "100%",
        textAlign: "center",
        id: "__alloyId2088"
    });
    $.__views.__alloyId2087.add($.__views.__alloyId2088);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    var subjectType;
    __defers["$.__views.__alloyId2064!click!back"] && $.__views.__alloyId2064.addEventListener("click", back);
    __defers["$.__views.picker!change!subjectType"] && $.__views.picker.addEventListener("change", subjectType);
    __defers["$.__views.__alloyId2087!click!send"] && $.__views.__alloyId2087.addEventListener("click", send);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;