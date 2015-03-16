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
    function forwarding(e) {
        console.log("forwarding: " + e.value);
    }
    function presentation(e) {
        console.log("presentation: " + e.value);
    }
    function restriction(e) {
        console.log("restriction: " + e.value);
    }
    function billing(e) {
        console.log("billing: " + e.value);
    }
    function international(e) {
        console.log("international: " + e.value);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "vas";
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
    $.__views.vas = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "vas"
    });
    $.__views.vas && $.addTopLevelView($.__views.vas);
    $.__views.__alloyId767 = Alloy.createController("_header", {
        id: "__alloyId767",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId767.setParent($.__views.vas);
    $.__views.__alloyId768 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId768"
    });
    $.__views.vas.add($.__views.__alloyId768);
    $.__views.__alloyId769 = Ti.UI.createLabel({
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId769"
    });
    $.__views.__alloyId768.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId770"
    });
    $.__views.__alloyId768.add($.__views.__alloyId770);
    back ? $.__views.__alloyId770.addEventListener("click", back) : __defers["$.__views.__alloyId770!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId771 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "20%",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId771"
    });
    $.__views.scrollView.add($.__views.__alloyId771);
    $.__views.__alloyId772 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId772"
    });
    $.__views.__alloyId771.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createLabel({
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId773"
    });
    $.__views.__alloyId772.add($.__views.__alloyId773);
    $.__views.__alloyId774 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId774"
    });
    $.__views.__alloyId771.add($.__views.__alloyId774);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId774.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId775 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "20%",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId775"
    });
    $.__views.scrollView.add($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId776"
    });
    $.__views.__alloyId775.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createLabel({
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId777"
    });
    $.__views.__alloyId776.add($.__views.__alloyId777);
    $.__views.__alloyId778 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId778"
    });
    $.__views.__alloyId775.add($.__views.__alloyId778);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId778.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId779 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "20%",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId779"
    });
    $.__views.scrollView.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId780"
    });
    $.__views.__alloyId779.add($.__views.__alloyId780);
    $.__views.__alloyId781 = Ti.UI.createLabel({
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId781"
    });
    $.__views.__alloyId780.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId782"
    });
    $.__views.__alloyId779.add($.__views.__alloyId782);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId782.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId783 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "20%",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId783"
    });
    $.__views.scrollView.add($.__views.__alloyId783);
    $.__views.__alloyId784 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId784"
    });
    $.__views.__alloyId783.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createLabel({
        text: "Itemized Billing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId785"
    });
    $.__views.__alloyId784.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId786"
    });
    $.__views.__alloyId783.add($.__views.__alloyId786);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4"
    });
    $.__views.__alloyId786.add($.__views.switch4);
    billing ? $.__views.switch4.addEventListener("change", billing) : __defers["$.__views.switch4!change!billing"] = true;
    $.__views.__alloyId787 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "20%",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId787"
    });
    $.__views.scrollView.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId788"
    });
    $.__views.__alloyId787.add($.__views.__alloyId788);
    $.__views.__alloyId789 = Ti.UI.createLabel({
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId789"
    });
    $.__views.__alloyId788.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId790"
    });
    $.__views.__alloyId787.add($.__views.__alloyId790);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId790.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId770!click!back"] && $.__views.__alloyId770.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch4!change!billing"] && $.__views.switch4.addEventListener("change", billing);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;