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
    $.__views.__alloyId1593 = Alloy.createController("_header", {
        id: "__alloyId1593",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId1593.setParent($.__views.vas);
    $.__views.__alloyId1594 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1594"
    });
    $.__views.vas.add($.__views.__alloyId1594);
    $.__views.__alloyId1595 = Ti.UI.createLabel({
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1595"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1595);
    $.__views.__alloyId1596 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1596"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1596);
    back ? $.__views.__alloyId1596.addEventListener("click", back) : __defers["$.__views.__alloyId1596!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId1597 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1597"
    });
    $.__views.scrollView.add($.__views.__alloyId1597);
    $.__views.__alloyId1598 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1598"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1598);
    $.__views.__alloyId1599 = Ti.UI.createLabel({
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1599"
    });
    $.__views.__alloyId1598.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1600"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1600);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1600.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId1601 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1601"
    });
    $.__views.scrollView.add($.__views.__alloyId1601);
    $.__views.__alloyId1602 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1602"
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createLabel({
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1603"
    });
    $.__views.__alloyId1602.add($.__views.__alloyId1603);
    $.__views.__alloyId1604 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1604"
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1604);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId1604.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId1605 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1605"
    });
    $.__views.scrollView.add($.__views.__alloyId1605);
    $.__views.__alloyId1606 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1606"
    });
    $.__views.__alloyId1605.add($.__views.__alloyId1606);
    $.__views.__alloyId1607 = Ti.UI.createLabel({
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1607"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1607);
    $.__views.__alloyId1608 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1608"
    });
    $.__views.__alloyId1605.add($.__views.__alloyId1608);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId1608.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId1609 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1609"
    });
    $.__views.scrollView.add($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1610"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createLabel({
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1611"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1611);
    $.__views.__alloyId1612 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1612"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1612);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId1612.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId1613 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1613"
    });
    $.__views.scrollView.add($.__views.__alloyId1613);
    $.__views.__alloyId1614 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1614"
    });
    $.__views.__alloyId1613.add($.__views.__alloyId1614);
    $.__views.__alloyId1615 = Ti.UI.createLabel({
        text: "IVR Language",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1615"
    });
    $.__views.__alloyId1614.add($.__views.__alloyId1615);
    $.__views.__alloyId1616 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1616"
    });
    $.__views.__alloyId1613.add($.__views.__alloyId1616);
    $.__views.__alloyId1617 = Ti.UI.createLabel({
        text: "English",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1617"
    });
    $.__views.__alloyId1616.add($.__views.__alloyId1617);
    $.__views.__alloyId1618 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1618"
    });
    $.__views.__alloyId1613.add($.__views.__alloyId1618);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1618.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId1596!click!back"] && $.__views.__alloyId1596.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;