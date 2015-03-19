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
    $.__views.__alloyId1614 = Alloy.createController("_header", {
        id: "__alloyId1614",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId1614.setParent($.__views.vas);
    $.__views.__alloyId1615 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1615"
    });
    $.__views.vas.add($.__views.__alloyId1615);
    $.__views.__alloyId1616 = Ti.UI.createLabel({
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1616"
    });
    $.__views.__alloyId1615.add($.__views.__alloyId1616);
    $.__views.__alloyId1617 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1617"
    });
    $.__views.__alloyId1615.add($.__views.__alloyId1617);
    back ? $.__views.__alloyId1617.addEventListener("click", back) : __defers["$.__views.__alloyId1617!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId1618 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1618"
    });
    $.__views.scrollView.add($.__views.__alloyId1618);
    $.__views.__alloyId1619 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1619"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1619);
    $.__views.__alloyId1620 = Ti.UI.createLabel({
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1620"
    });
    $.__views.__alloyId1619.add($.__views.__alloyId1620);
    $.__views.__alloyId1621 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1621"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1621);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1621.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId1622 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1622"
    });
    $.__views.scrollView.add($.__views.__alloyId1622);
    $.__views.__alloyId1623 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1623"
    });
    $.__views.__alloyId1622.add($.__views.__alloyId1623);
    $.__views.__alloyId1624 = Ti.UI.createLabel({
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1624"
    });
    $.__views.__alloyId1623.add($.__views.__alloyId1624);
    $.__views.__alloyId1625 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1625"
    });
    $.__views.__alloyId1622.add($.__views.__alloyId1625);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId1625.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId1626 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1626"
    });
    $.__views.scrollView.add($.__views.__alloyId1626);
    $.__views.__alloyId1627 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1627"
    });
    $.__views.__alloyId1626.add($.__views.__alloyId1627);
    $.__views.__alloyId1628 = Ti.UI.createLabel({
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1628"
    });
    $.__views.__alloyId1627.add($.__views.__alloyId1628);
    $.__views.__alloyId1629 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1629"
    });
    $.__views.__alloyId1626.add($.__views.__alloyId1629);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId1629.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId1630 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1630"
    });
    $.__views.scrollView.add($.__views.__alloyId1630);
    $.__views.__alloyId1631 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1631"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1631);
    $.__views.__alloyId1632 = Ti.UI.createLabel({
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1632"
    });
    $.__views.__alloyId1631.add($.__views.__alloyId1632);
    $.__views.__alloyId1633 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1633"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1633);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId1633.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId1634 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1634"
    });
    $.__views.scrollView.add($.__views.__alloyId1634);
    $.__views.__alloyId1635 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1635"
    });
    $.__views.__alloyId1634.add($.__views.__alloyId1635);
    $.__views.__alloyId1636 = Ti.UI.createLabel({
        text: "IVR Language",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1636"
    });
    $.__views.__alloyId1635.add($.__views.__alloyId1636);
    $.__views.__alloyId1637 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1637"
    });
    $.__views.__alloyId1634.add($.__views.__alloyId1637);
    $.__views.__alloyId1638 = Ti.UI.createLabel({
        text: "English",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1638"
    });
    $.__views.__alloyId1637.add($.__views.__alloyId1638);
    $.__views.__alloyId1639 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1639"
    });
    $.__views.__alloyId1634.add($.__views.__alloyId1639);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1639.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId1617!click!back"] && $.__views.__alloyId1617.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;