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
    $.__views.__alloyId1235 = Alloy.createController("_header", {
        id: "__alloyId1235",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId1235.setParent($.__views.vas);
    $.__views.__alloyId1236 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1236"
    });
    $.__views.vas.add($.__views.__alloyId1236);
    $.__views.__alloyId1237 = Ti.UI.createLabel({
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1237"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1237);
    $.__views.__alloyId1238 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1238"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1238);
    back ? $.__views.__alloyId1238.addEventListener("click", back) : __defers["$.__views.__alloyId1238!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId1239 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1239"
    });
    $.__views.scrollView.add($.__views.__alloyId1239);
    $.__views.__alloyId1240 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1240"
    });
    $.__views.__alloyId1239.add($.__views.__alloyId1240);
    $.__views.__alloyId1241 = Ti.UI.createLabel({
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1241"
    });
    $.__views.__alloyId1240.add($.__views.__alloyId1241);
    $.__views.__alloyId1242 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1242"
    });
    $.__views.__alloyId1239.add($.__views.__alloyId1242);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1242.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId1243 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1243"
    });
    $.__views.scrollView.add($.__views.__alloyId1243);
    $.__views.__alloyId1244 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1244"
    });
    $.__views.__alloyId1243.add($.__views.__alloyId1244);
    $.__views.__alloyId1245 = Ti.UI.createLabel({
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1245"
    });
    $.__views.__alloyId1244.add($.__views.__alloyId1245);
    $.__views.__alloyId1246 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1246"
    });
    $.__views.__alloyId1243.add($.__views.__alloyId1246);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId1246.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId1247 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1247"
    });
    $.__views.scrollView.add($.__views.__alloyId1247);
    $.__views.__alloyId1248 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1248"
    });
    $.__views.__alloyId1247.add($.__views.__alloyId1248);
    $.__views.__alloyId1249 = Ti.UI.createLabel({
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1249"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1249);
    $.__views.__alloyId1250 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1250"
    });
    $.__views.__alloyId1247.add($.__views.__alloyId1250);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId1250.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId1251 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1251"
    });
    $.__views.scrollView.add($.__views.__alloyId1251);
    $.__views.__alloyId1252 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1252"
    });
    $.__views.__alloyId1251.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createLabel({
        text: "Itemized Billing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1253"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1253);
    $.__views.__alloyId1254 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1254"
    });
    $.__views.__alloyId1251.add($.__views.__alloyId1254);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4"
    });
    $.__views.__alloyId1254.add($.__views.switch4);
    billing ? $.__views.switch4.addEventListener("change", billing) : __defers["$.__views.switch4!change!billing"] = true;
    $.__views.__alloyId1255 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1255"
    });
    $.__views.scrollView.add($.__views.__alloyId1255);
    $.__views.__alloyId1256 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1256"
    });
    $.__views.__alloyId1255.add($.__views.__alloyId1256);
    $.__views.__alloyId1257 = Ti.UI.createLabel({
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1257"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1257);
    $.__views.__alloyId1258 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1258"
    });
    $.__views.__alloyId1255.add($.__views.__alloyId1258);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId1258.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1238!click!back"] && $.__views.__alloyId1238.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch4!change!billing"] && $.__views.switch4.addEventListener("change", billing);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;