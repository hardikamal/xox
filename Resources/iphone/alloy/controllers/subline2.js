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
        DRAWER.navigation("subline", 1);
    }
    function submit() {
        console.log("submit");
        $.tacView.zIndex = 2;
    }
    function submit2() {
        console.log("submit2");
    }
    function close() {
        console.log("close");
        $.tacView.zIndex = 0;
    }
    function resend() {
        console.log("resend");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline2";
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
    $.__views.subline2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "composite",
        fullscreen: "true",
        id: "subline2"
    });
    $.__views.subline2 && $.addTopLevelView($.__views.subline2);
    $.__views.__alloyId1597 = Alloy.createController("_header", {
        id: "__alloyId1597",
        __parentSymbol: $.__views.subline2
    });
    $.__views.__alloyId1597.setParent($.__views.subline2);
    $.__views.tacView = Ti.UI.createView({
        id: "tacView",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.subline2.add($.__views.tacView);
    $.__views.__alloyId1598 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        borderColor: "white",
        id: "__alloyId1598"
    });
    $.__views.tacView.add($.__views.__alloyId1598);
    $.__views.__alloyId1599 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId1599"
    });
    $.__views.__alloyId1598.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createLabel({
        text: "Activation Code",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "10",
        id: "__alloyId1600"
    });
    $.__views.__alloyId1599.add($.__views.__alloyId1600);
    $.__views.__alloyId1601 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1601"
    });
    $.__views.__alloyId1599.add($.__views.__alloyId1601);
    close ? $.__views.__alloyId1601.addEventListener("click", close) : __defers["$.__views.__alloyId1601!click!close"] = true;
    $.__views.__alloyId1602 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#E6E7E9",
        id: "__alloyId1602"
    });
    $.__views.__alloyId1598.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createLabel({
        text: "A TAC has been sent to the sub-line. Please check and enter below for verification.",
        color: "black",
        width: Ti.UI.FILL,
        textAlign: "left",
        left: "10",
        id: "__alloyId1603"
    });
    $.__views.__alloyId1602.add($.__views.__alloyId1603);
    $.__views.__alloyId1604 = Ti.UI.createLabel({
        text: "Mobile Number: 01x0000000",
        color: "black",
        width: Ti.UI.FILL,
        textAlign: "left",
        left: "10",
        top: "10",
        id: "__alloyId1604"
    });
    $.__views.__alloyId1602.add($.__views.__alloyId1604);
    $.__views.tac = Ti.UI.createTextField({
        id: "tac",
        width: "90%",
        height: "50",
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        textAlign: "left",
        hintText: "TAC Number"
    });
    $.__views.__alloyId1602.add($.__views.tac);
    $.__views.__alloyId1605 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId1605"
    });
    $.__views.__alloyId1602.add($.__views.__alloyId1605);
    $.__views.__alloyId1606 = Ti.UI.createLabel({
        text: "If you do not receive TAC within 3 minutes, please",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "10",
        top: "10",
        id: "__alloyId1606"
    });
    $.__views.__alloyId1605.add($.__views.__alloyId1606);
    $.__views.__alloyId1607 = Ti.UI.createLabel({
        text: "click here.",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "0",
        id: "__alloyId1607"
    });
    $.__views.__alloyId1605.add($.__views.__alloyId1607);
    resend ? $.__views.__alloyId1607.addEventListener("click", resend) : __defers["$.__views.__alloyId1607!click!resend"] = true;
    $.__views.__alloyId1608 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId1608"
    });
    $.__views.__alloyId1598.add($.__views.__alloyId1608);
    submit2 ? $.__views.__alloyId1608.addEventListener("click", submit2) : __defers["$.__views.__alloyId1608!click!submit2"] = true;
    $.__views.__alloyId1609 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId1609"
    });
    $.__views.__alloyId1608.add($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createView({
        layout: "vertical",
        top: "50",
        zIndex: "1",
        id: "__alloyId1610"
    });
    $.__views.subline2.add($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1611"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1611);
    $.__views.__alloyId1612 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1612"
    });
    $.__views.__alloyId1611.add($.__views.__alloyId1612);
    $.__views.__alloyId1613 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1613"
    });
    $.__views.__alloyId1611.add($.__views.__alloyId1613);
    back ? $.__views.__alloyId1613.addEventListener("click", back) : __defers["$.__views.__alloyId1613!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.__alloyId1610.add($.__views.scrollView);
    $.__views.__alloyId1614 = Ti.UI.createLabel({
        text: "1. Key in Sub-line XOX mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1614"
    });
    $.__views.scrollView.add($.__views.__alloyId1614);
    $.__views.__alloyId1615 = Ti.UI.createLabel({
        text: "2. You will receive an activation code via SMS to your sub-line XOX mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1615"
    });
    $.__views.scrollView.add($.__views.__alloyId1615);
    $.__views.__alloyId1616 = Ti.UI.createLabel({
        text: "3. Upon receiving your activition code via SMS, key in the code to verify and add your sub-line account.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1616"
    });
    $.__views.scrollView.add($.__views.__alloyId1616);
    $.__views.__alloyId1617 = Ti.UI.createLabel({
        text: "4. You may now manage your sub-line account.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1617"
    });
    $.__views.scrollView.add($.__views.__alloyId1617);
    $.__views.__alloyId1618 = Ti.UI.createLabel({
        text: "Subline Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        top: "20",
        id: "__alloyId1618"
    });
    $.__views.scrollView.add($.__views.__alloyId1618);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "90%",
        height: "50",
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD
    });
    $.__views.scrollView.add($.__views.mobileNo);
    $.__views.__alloyId1619 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId1619"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1619);
    $.__views.__alloyId1620 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId1620"
    });
    $.__views.__alloyId1619.add($.__views.__alloyId1620);
    submit ? $.__views.__alloyId1620.addEventListener("click", submit) : __defers["$.__views.__alloyId1620!click!submit"] = true;
    $.__views.__alloyId1621 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId1621"
    });
    $.__views.__alloyId1620.add($.__views.__alloyId1621);
    $.__views.__alloyId1622 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1622"
    });
    $.__views.__alloyId1619.add($.__views.__alloyId1622);
    $.__views.__alloyId1623 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId1623"
    });
    $.__views.__alloyId1619.add($.__views.__alloyId1623);
    back ? $.__views.__alloyId1623.addEventListener("click", back) : __defers["$.__views.__alloyId1623!click!back"] = true;
    $.__views.__alloyId1624 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId1624"
    });
    $.__views.__alloyId1623.add($.__views.__alloyId1624);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1601!click!close"] && $.__views.__alloyId1601.addEventListener("click", close);
    __defers["$.__views.__alloyId1607!click!resend"] && $.__views.__alloyId1607.addEventListener("click", resend);
    __defers["$.__views.__alloyId1608!click!submit2"] && $.__views.__alloyId1608.addEventListener("click", submit2);
    __defers["$.__views.__alloyId1613!click!back"] && $.__views.__alloyId1613.addEventListener("click", back);
    __defers["$.__views.__alloyId1620!click!submit"] && $.__views.__alloyId1620.addEventListener("click", submit);
    __defers["$.__views.__alloyId1623!click!back"] && $.__views.__alloyId1623.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;