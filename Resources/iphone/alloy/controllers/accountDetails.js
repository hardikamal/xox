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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "accountDetails";
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
    $.__views.accountDetails = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "accountDetails"
    });
    $.__views.accountDetails && $.addTopLevelView($.__views.accountDetails);
    $.__views.__alloyId2 = Alloy.createController("_header", {
        id: "__alloyId2",
        __parentSymbol: $.__views.accountDetails
    });
    $.__views.__alloyId2.setParent($.__views.accountDetails);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId3"
    });
    $.__views.accountDetails.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "Account Details",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    back ? $.__views.__alloyId5.addEventListener("click", back) : __defers["$.__views.__alloyId5!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.accountDetails.add($.__views.scrollView);
    $.__views.__alloyId6 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId6"
    });
    $.__views.scrollView.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: "10",
        bottom: "10",
        id: "__alloyId8"
    });
    $.__views.__alloyId6.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: "160",
        width: "160",
        borderRadius: "80",
        backgroundColor: "red",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        width: "120",
        borderRadius: "60",
        backgroundColor: "#F5F5F5",
        id: "__alloyId10"
    });
    $.__views.__alloyId8.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "RM",
        color: "black",
        textAlign: "center",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        textAlign: "center",
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "20",
        backgroundColor: "white",
        id: "__alloyId14"
    });
    $.__views.scrollView.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        width: "50%",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        text: "Handphone No.:",
        color: "black",
        textAlign: "left",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        width: "50%",
        id: "__alloyId18"
    });
    $.__views.__alloyId15.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "01xxxxxxxx",
        color: "#929292",
        textAlign: "left",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        height: "2",
        width: "90%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId20"
    });
    $.__views.__alloyId14.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId21"
    });
    $.__views.__alloyId14.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        width: "50%",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        text: "International Roaming:",
        color: "black",
        textAlign: "left",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        width: "50%",
        id: "__alloyId24"
    });
    $.__views.__alloyId21.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        text: "Active",
        color: "#929292",
        textAlign: "left",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        height: "2",
        width: "90%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId26"
    });
    $.__views.__alloyId14.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId27"
    });
    $.__views.__alloyId14.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        width: "50%",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        text: "Plan Status:",
        color: "black",
        textAlign: "left",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        width: "50%",
        id: "__alloyId30"
    });
    $.__views.__alloyId27.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        text: "Active",
        color: "#929292",
        textAlign: "left",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        height: "2",
        width: "90%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId32"
    });
    $.__views.__alloyId14.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId33"
    });
    $.__views.__alloyId14.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        width: "50%",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        text: "Credit Limit:",
        color: "black",
        textAlign: "left",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        width: "50%",
        id: "__alloyId36"
    });
    $.__views.__alloyId33.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        text: "RM200.00",
        color: "#929292",
        textAlign: "left",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        height: "2",
        width: "90%",
        backgroundColor: "#F5F5F5",
        bottom: "10",
        id: "__alloyId38"
    });
    $.__views.__alloyId14.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId39"
    });
    $.__views.accountDetails.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        text: "View Statement",
        color: "white",
        height: "100%",
        width: "49.75%",
        textAlign: "center",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        text: "Download",
        color: "white",
        height: "100%",
        width: "49.75%",
        textAlign: "center",
        id: "__alloyId42"
    });
    $.__views.__alloyId39.add($.__views.__alloyId42);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    __defers["$.__views.__alloyId5!click!back"] && $.__views.__alloyId5.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;