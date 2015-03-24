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
    function proceed() {
        DRAWER.navigation("payment6", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment5";
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
    $.__views.payment5 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment5"
    });
    $.__views.payment5 && $.addTopLevelView($.__views.payment5);
    $.__views.__alloyId1534 = Alloy.createController("_header", {
        id: "__alloyId1534",
        __parentSymbol: $.__views.payment5
    });
    $.__views.__alloyId1534.setParent($.__views.payment5);
    $.__views.__alloyId1535 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1535"
    });
    $.__views.payment5.add($.__views.__alloyId1535);
    $.__views.__alloyId1536 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1536"
    });
    $.__views.__alloyId1535.add($.__views.__alloyId1536);
    $.__views.__alloyId1537 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1537"
    });
    $.__views.__alloyId1535.add($.__views.__alloyId1537);
    back ? $.__views.__alloyId1537.addEventListener("click", back) : __defers["$.__views.__alloyId1537!click!back"] = true;
    $.__views.__alloyId1538 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1538"
    });
    $.__views.payment5.add($.__views.__alloyId1538);
    $.__views.__alloyId1539 = Ti.UI.createLabel({
        text: "Air Time Transfer",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1539"
    });
    $.__views.__alloyId1538.add($.__views.__alloyId1539);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment5.add($.__views.scrollView);
    $.__views.__alloyId1540 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1540"
    });
    $.__views.scrollView.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1541"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1542"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1543"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1543);
    $.__views.__alloyId1544 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1544"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1545"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1545);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1546 = Ti.UI.createLabel({
        text: "Mobile number",
        color: "black",
        id: "__alloyId1546"
    });
    $.__views.contentView2.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1547"
    });
    $.__views.contentView2.add($.__views.__alloyId1547);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1548 = Ti.UI.createLabel({
        text: "Amount to transfer",
        color: "black",
        id: "__alloyId1548"
    });
    $.__views.contentView2.add($.__views.__alloyId1548);
    $.__views.__alloyId1549 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1549"
    });
    $.__views.contentView2.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1550"
    });
    $.__views.payment5.add($.__views.__alloyId1550);
    proceed ? $.__views.__alloyId1550.addEventListener("click", proceed) : __defers["$.__views.__alloyId1550!click!proceed"] = true;
    $.__views.__alloyId1551 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1551"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1551);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId1537!click!back"] && $.__views.__alloyId1537.addEventListener("click", back);
    __defers["$.__views.__alloyId1550!click!proceed"] && $.__views.__alloyId1550.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;