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
    $.__views.__alloyId2224 = Alloy.createController("_header", {
        id: "__alloyId2224",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId2224.setParent($.__views.vas);
    $.__views.__alloyId2225 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2225"
    });
    $.__views.vas.add($.__views.__alloyId2225);
    $.__views.__alloyId2226 = Ti.UI.createLabel({
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2226"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2227"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2227);
    back ? $.__views.__alloyId2227.addEventListener("click", back) : __defers["$.__views.__alloyId2227!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId2228 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2228"
    });
    $.__views.scrollView.add($.__views.__alloyId2228);
    $.__views.__alloyId2229 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2229"
    });
    $.__views.__alloyId2228.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createLabel({
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2230"
    });
    $.__views.__alloyId2229.add($.__views.__alloyId2230);
    $.__views.__alloyId2231 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2231"
    });
    $.__views.__alloyId2228.add($.__views.__alloyId2231);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId2231.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2232 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2232"
    });
    $.__views.scrollView.add($.__views.__alloyId2232);
    $.__views.__alloyId2233 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2233"
    });
    $.__views.__alloyId2232.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createLabel({
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2234"
    });
    $.__views.__alloyId2233.add($.__views.__alloyId2234);
    $.__views.__alloyId2235 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2235"
    });
    $.__views.__alloyId2232.add($.__views.__alloyId2235);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2235.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId2236 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2236"
    });
    $.__views.scrollView.add($.__views.__alloyId2236);
    $.__views.__alloyId2237 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2237"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2237);
    $.__views.__alloyId2238 = Ti.UI.createLabel({
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2238"
    });
    $.__views.__alloyId2237.add($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2239"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2239);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId2239.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId2240 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2240"
    });
    $.__views.scrollView.add($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2241"
    });
    $.__views.__alloyId2240.add($.__views.__alloyId2241);
    $.__views.__alloyId2242 = Ti.UI.createLabel({
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2242"
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2243"
    });
    $.__views.__alloyId2240.add($.__views.__alloyId2243);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId2243.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId2244 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2244"
    });
    $.__views.scrollView.add($.__views.__alloyId2244);
    $.__views.__alloyId2245 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId2245"
    });
    $.__views.__alloyId2244.add($.__views.__alloyId2245);
    $.__views.__alloyId2246 = Ti.UI.createLabel({
        text: "IVR Language",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2246"
    });
    $.__views.__alloyId2245.add($.__views.__alloyId2246);
    $.__views.__alloyId2247 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2247"
    });
    $.__views.__alloyId2244.add($.__views.__alloyId2247);
    $.__views.__alloyId2248 = Ti.UI.createLabel({
        text: "English",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2248"
    });
    $.__views.__alloyId2247.add($.__views.__alloyId2248);
    $.__views.__alloyId2249 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2249"
    });
    $.__views.__alloyId2244.add($.__views.__alloyId2249);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2249.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2227!click!back"] && $.__views.__alloyId2227.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;