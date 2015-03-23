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
    $.__views.__alloyId1713 = Alloy.createController("_header", {
        id: "__alloyId1713",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId1713.setParent($.__views.vas);
    $.__views.__alloyId1714 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1714"
    });
    $.__views.vas.add($.__views.__alloyId1714);
    $.__views.__alloyId1715 = Ti.UI.createLabel({
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1715"
    });
    $.__views.__alloyId1714.add($.__views.__alloyId1715);
    $.__views.__alloyId1716 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1716"
    });
    $.__views.__alloyId1714.add($.__views.__alloyId1716);
    back ? $.__views.__alloyId1716.addEventListener("click", back) : __defers["$.__views.__alloyId1716!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId1717 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1717"
    });
    $.__views.scrollView.add($.__views.__alloyId1717);
    $.__views.__alloyId1718 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1718"
    });
    $.__views.__alloyId1717.add($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createLabel({
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1719"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1719);
    $.__views.__alloyId1720 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1720"
    });
    $.__views.__alloyId1717.add($.__views.__alloyId1720);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1720.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId1721 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1721"
    });
    $.__views.scrollView.add($.__views.__alloyId1721);
    $.__views.__alloyId1722 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1722"
    });
    $.__views.__alloyId1721.add($.__views.__alloyId1722);
    $.__views.__alloyId1723 = Ti.UI.createLabel({
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1723"
    });
    $.__views.__alloyId1722.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1724"
    });
    $.__views.__alloyId1721.add($.__views.__alloyId1724);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId1724.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId1725 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1725"
    });
    $.__views.scrollView.add($.__views.__alloyId1725);
    $.__views.__alloyId1726 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1726"
    });
    $.__views.__alloyId1725.add($.__views.__alloyId1726);
    $.__views.__alloyId1727 = Ti.UI.createLabel({
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1727"
    });
    $.__views.__alloyId1726.add($.__views.__alloyId1727);
    $.__views.__alloyId1728 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1728"
    });
    $.__views.__alloyId1725.add($.__views.__alloyId1728);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId1728.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId1729 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1729"
    });
    $.__views.scrollView.add($.__views.__alloyId1729);
    $.__views.__alloyId1730 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1730"
    });
    $.__views.__alloyId1729.add($.__views.__alloyId1730);
    $.__views.__alloyId1731 = Ti.UI.createLabel({
        text: "Itemized Billing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1731"
    });
    $.__views.__alloyId1730.add($.__views.__alloyId1731);
    $.__views.__alloyId1732 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1732"
    });
    $.__views.__alloyId1729.add($.__views.__alloyId1732);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4"
    });
    $.__views.__alloyId1732.add($.__views.switch4);
    billing ? $.__views.switch4.addEventListener("change", billing) : __defers["$.__views.switch4!change!billing"] = true;
    $.__views.__alloyId1733 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1733"
    });
    $.__views.scrollView.add($.__views.__alloyId1733);
    $.__views.__alloyId1734 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1734"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1734);
    $.__views.__alloyId1735 = Ti.UI.createLabel({
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1735"
    });
    $.__views.__alloyId1734.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1736"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1736);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId1736.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1716!click!back"] && $.__views.__alloyId1716.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch4!change!billing"] && $.__views.switch4.addEventListener("change", billing);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;