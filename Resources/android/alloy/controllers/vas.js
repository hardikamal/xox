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
    function forwarding(e) {
        console.log("forwarding: " + e.value);
    }
    function presentation(e) {
        console.log("presentation: " + e.value);
    }
    function restriction(e) {
        console.log("restriction: " + e.value);
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
    $.__views.__alloyId2986 = Alloy.createController("_header", {
        id: "__alloyId2986",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId2986.setParent($.__views.vas);
    $.__views.__alloyId2987 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2987"
    });
    $.__views.vas.add($.__views.__alloyId2987);
    $.__views.__alloyId2988 = Ti.UI.createLabel({
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2988"
    });
    $.__views.__alloyId2987.add($.__views.__alloyId2988);
    $.__views.__alloyId2989 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2989"
    });
    $.__views.__alloyId2987.add($.__views.__alloyId2989);
    back ? $.__views.__alloyId2989.addEventListener("click", back) : __defers["$.__views.__alloyId2989!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId2990 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2990"
    });
    $.__views.scrollView.add($.__views.__alloyId2990);
    $.__views.__alloyId2991 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2991"
    });
    $.__views.__alloyId2990.add($.__views.__alloyId2991);
    $.__views.__alloyId2992 = Ti.UI.createLabel({
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2992"
    });
    $.__views.__alloyId2991.add($.__views.__alloyId2992);
    $.__views.__alloyId2993 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2993"
    });
    $.__views.__alloyId2990.add($.__views.__alloyId2993);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId2993.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2994 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2994"
    });
    $.__views.scrollView.add($.__views.__alloyId2994);
    $.__views.__alloyId2995 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2995"
    });
    $.__views.__alloyId2994.add($.__views.__alloyId2995);
    $.__views.__alloyId2996 = Ti.UI.createLabel({
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2996"
    });
    $.__views.__alloyId2995.add($.__views.__alloyId2996);
    $.__views.__alloyId2997 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2997"
    });
    $.__views.__alloyId2994.add($.__views.__alloyId2997);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2997.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId2998 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2998"
    });
    $.__views.scrollView.add($.__views.__alloyId2998);
    $.__views.__alloyId2999 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2999"
    });
    $.__views.__alloyId2998.add($.__views.__alloyId2999);
    $.__views.__alloyId3000 = Ti.UI.createLabel({
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId3000"
    });
    $.__views.__alloyId2999.add($.__views.__alloyId3000);
    $.__views.__alloyId3001 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId3001"
    });
    $.__views.__alloyId2998.add($.__views.__alloyId3001);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId3001.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId3002 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId3002"
    });
    $.__views.scrollView.add($.__views.__alloyId3002);
    $.__views.__alloyId3003 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId3003"
    });
    $.__views.__alloyId3002.add($.__views.__alloyId3003);
    $.__views.__alloyId3004 = Ti.UI.createLabel({
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId3004"
    });
    $.__views.__alloyId3003.add($.__views.__alloyId3004);
    $.__views.__alloyId3005 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId3005"
    });
    $.__views.__alloyId3002.add($.__views.__alloyId3005);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId3005.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId3006 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId3006"
    });
    $.__views.scrollView.add($.__views.__alloyId3006);
    $.__views.__alloyId3007 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId3007"
    });
    $.__views.__alloyId3006.add($.__views.__alloyId3007);
    $.__views.__alloyId3008 = Ti.UI.createLabel({
        text: "IVR Language",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId3008"
    });
    $.__views.__alloyId3007.add($.__views.__alloyId3008);
    $.__views.__alloyId3009 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId3009"
    });
    $.__views.__alloyId3006.add($.__views.__alloyId3009);
    $.__views.__alloyId3010 = Ti.UI.createLabel({
        text: "English",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId3010"
    });
    $.__views.__alloyId3009.add($.__views.__alloyId3010);
    $.__views.__alloyId3011 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId3011"
    });
    $.__views.__alloyId3006.add($.__views.__alloyId3011);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId3011.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2989!click!back"] && $.__views.__alloyId2989.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;